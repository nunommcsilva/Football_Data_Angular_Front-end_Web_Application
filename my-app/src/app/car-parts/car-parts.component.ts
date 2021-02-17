import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-car-parts',
  templateUrl: './car-parts.component.html',
  styleUrls: ['./car-parts.component.css']
})
export class CarPartsComponent implements OnInit {

  title:string;

  constructor(
    private appComponent: AppComponent,
  ) { }

  ngOnInit() {
    this.title = this.appComponent.title;
  }

}
