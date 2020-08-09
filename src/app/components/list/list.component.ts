import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listCountries: any[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {

    this.countryService.country$.pipe(map(data => data.borders))
    .subscribe(data => this.listCountries = data);

  }

}
