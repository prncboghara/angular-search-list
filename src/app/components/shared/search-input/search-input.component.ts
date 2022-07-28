import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  constructor() { }
  @Input() searchForm: FormGroup = new FormGroup({text: new FormControl('')})

  ngOnInit(): void {
  }
}
