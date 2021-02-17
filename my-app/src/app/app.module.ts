import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CarPartsComponent } from './car-parts/car-parts.component';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { FutebolComponent } from './futebol/futebol.component';
import { EquipaComponent } from './equipa/equipa.component';
import {EquipaService} from './equipa/equipa.service';

@NgModule({
  declarations: [
    AppComponent,
    CarPartsComponent,
    FutebolComponent,
    EquipaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [EquipaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
