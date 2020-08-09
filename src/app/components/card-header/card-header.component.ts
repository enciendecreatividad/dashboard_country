import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.css']
})
export class CardHeaderComponent implements OnInit {

  titles = ["Language", "Continent", "Currency", "Capital"];
  defaultValue = ["-", "-", "-", "-"];
  data: any[] = [];

  constructor(private countryService: CountryService) {
    this.createCard(this.defaultValue);
   }

  ngOnInit(): void {

    this.countryService.country$.pipe(map(data => 
      ({
        language: data.language,
        region: data.region,
        currency: `${data.symbol} ${data.currency}`,
        capital: data.capital
      })
      )).subscribe(data => {
        let arrData = Object.values(data);
        this.createCard(arrData);
      })
  
  }


  createCard(description: string[]) {
    this.data = [];
    this.data = this.titles.map((title, i) =>
      ({
        title: title,
        description: description[i]
      })
    );
  }

}
