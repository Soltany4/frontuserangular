import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpreuvesRoutingModule } from './epreuves-routing.module';
import { EpreuvesComponent } from './epreuves.component';


@NgModule({
  declarations: [
    EpreuvesComponent
  ],
  imports: [
    CommonModule,
    EpreuvesRoutingModule
  ]
})
export class EpreuvesModule { }
