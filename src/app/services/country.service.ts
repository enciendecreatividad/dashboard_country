import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CountryInterface } from '../models/country.interface';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { formatNumber } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  url= "https://restcountries.eu/rest/v2";
  private sub = new Subject<CountryInterface>();
  country$ = this.sub.asObservable();

  constructor(private http: HttpClient) { }

  getCountry(name: string){
    return this.http.get(`${this.url}/name/${name}?fullText=true`)
    .pipe(map(data => 
      ({
        language: data[0].languages[0].name,
        currency: data[0].currencies[0].code,
        symbol: data[0].currencies[0].symbol,
        ...data[0],
        population: formatNumber(data[0].population, "en_US")
      })
      ));
  }

  setCountry(country: CountryInterface){
    this.sub.next(country);
  }


}
