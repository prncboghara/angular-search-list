import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from '../search.component';
import { SearchInputComponent } from '../../shared/search-input/search-input.component';
import { ListsComponent } from '../../shared/lists/lists.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NameExtractorPipe } from 'src/app/pipes/name-extractor.pipe';
import { FilterPipe } from 'src/app/pipes/filter.pipe';


@NgModule({
  declarations: [
    SearchComponent,
    SearchInputComponent,
    ListsComponent,

    NameExtractorPipe,
    FilterPipe
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class SearchModule { }
