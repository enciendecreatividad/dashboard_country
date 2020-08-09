import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  temp: any;
  @ViewChild('idsvg', {static:true}) idsvg: ElementRef;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {

    this.countryService.country$.pipe(map(data => data.alpha2Code))
        .subscribe(id => this.changeColor(id));

  }

  changeColor(idCountry: string){
    if(this.temp != null) this.temp.style.fill = "#f2f2f2";
    let svgDoc = this.idsvg.nativeElement.contentDocument;
    let country = svgDoc.querySelector(`#${idCountry}`);
    country.style.fill = "#E63955";
    this.temp = country;
  }

}
