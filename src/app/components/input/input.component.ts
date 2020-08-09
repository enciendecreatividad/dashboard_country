import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  txtInput: FormControl;

  constructor(private countryService: CountryService) {
    this.txtInput = new FormControl('',
      Validators.minLength(3));
  }

  ngOnInit(): void {
  }

  search() {
    if (this.txtInput.invalid || this.txtInput.value === "") return;
    let name = this.txtInput.value;

    this.countryService.getCountry(name)
      .subscribe(data => this.countryService.setCountry(data),
        err => console.warn(err));

    this.txtInput.reset();
  }

}
