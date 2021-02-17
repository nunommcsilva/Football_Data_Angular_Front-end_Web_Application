import { Component, OnInit } from '@angular/core';
import {EquipaService} from './equipa.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-equipa',
  templateUrl: './equipa.component.html',
  styleUrls: ['./equipa.component.css']
})

export class EquipaComponent implements OnInit {
  
  equipa:{}

  constructor(
    private equipaService:EquipaService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getEquipa()
  }

  getEquipa(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.equipaService.getEquipa(id)
      .subscribe(equipa => this.equipa = equipa);
  }

}
