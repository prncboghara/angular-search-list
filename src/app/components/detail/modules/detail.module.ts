import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from '../detail.component';
import { DetailFieldsComponent } from '../../shared/detail-fields/detail-fields.component';


@NgModule({
  declarations: [
    DetailComponent,
    DetailFieldsComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule
  ]
})
export class DetailModule { }
