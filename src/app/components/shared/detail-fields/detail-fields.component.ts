import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/model/user';

@Component({
  selector: 'app-detail-fields',
  templateUrl: './detail-fields.component.html',
  styleUrls: ['./detail-fields.component.scss']
})
export class DetailFieldsComponent implements OnInit {

  constructor() { }
  @Input() user:IUser|undefined;

  ngOnInit(): void {

  }

}
