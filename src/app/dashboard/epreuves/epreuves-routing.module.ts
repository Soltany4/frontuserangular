import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpreuvesComponent } from './epreuves.component';

const routes: Routes = [{path: '', component: EpreuvesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpreuvesRoutingModule { }
