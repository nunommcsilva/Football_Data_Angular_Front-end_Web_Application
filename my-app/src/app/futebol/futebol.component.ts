import { Component, OnInit } from '@angular/core';
import { FutebolService } from './futebol.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-futebol',
  templateUrl: './futebol.component.html',
  styleUrls: ['./futebol.component.css']
})

export class FutebolComponent implements OnInit {
  futebol: {};
  url: string;

  constructor(
    private futebolService: FutebolService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getCurrentFutebol();
    this.route.url.subscribe((event)=>this.getCurrentFutebol()); 
  }

  getCurrentFutebol(): void {
    this.url = this.route.snapshot.paramMap.get('url');
    this.futebolService.getCurrentFutebol(this.url)
      .subscribe(futebol => this.futebol = futebol);
  }

}
