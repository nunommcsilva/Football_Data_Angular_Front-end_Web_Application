import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarPartsComponent} from './car-parts/car-parts.component';
import {FutebolComponent} from './futebol/futebol.component';
import {EquipaComponent} from './equipa/equipa.component';

const routes:Routes = [
  {path:'',redirectTo:'/carparts',pathMatch:'full'},
  {path:'carparts',component:CarPartsComponent},
  {path:'futebol/:url',component:FutebolComponent},
  {path:'equipa/:id',component:EquipaComponent},

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
