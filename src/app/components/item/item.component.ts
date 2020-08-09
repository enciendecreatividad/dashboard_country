import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  //Border Countries
  @Input() country: string;
  constructor() { }

  ngOnInit(): void {
  }

}
