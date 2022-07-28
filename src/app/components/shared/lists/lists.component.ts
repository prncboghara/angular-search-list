import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/model/user';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  constructor() { }
  @Input() users:IUser[] = [];
  @Input() filteredTxt:string = '';

  ngOnInit(): void {
  }

}
