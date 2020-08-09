import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-card-main',
  templateUrl: './card-main.component.html',
  styleUrls: ['./card-main.component.css']
})
export class CardMainComponent implements OnInit {

  titles: string[] = ["Country", "Population", "Flag"];
  defaultValue = ["-", "-"];
  isImg: boolean[] = [false, false, true];
  data: any[] = [];

  constructor(private countryService: CountryService) {
    this.createCard(this.defaultValue);
   }

  ngOnInit(): void {
    this.countryService.country$.pipe(map(data => 
        ({
          name: data.name,
          population: data.population,
          flag: data.flag
        })
      )).subscribe(data => {
        let arrData = Object.values(data);
        this.createCard(arrData);
      })
  }


  createCard(arr: string[], isImg: boolean[] = this.isImg) {

    this.data = [];
    this.data = this.titles.map((x, i) =>
      ({
        title: x,
        description: arr[i],
        isImg: isImg[i]
      }));

  }


}
