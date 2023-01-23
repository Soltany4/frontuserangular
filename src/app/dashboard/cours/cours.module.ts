import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursRoutingModule } from './cours-routing.module';
import { CoursComponent } from './cours.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    CoursComponent
  ],
  imports: [
    CommonModule,
    CoursRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class CoursModule { }
