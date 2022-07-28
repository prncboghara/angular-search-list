import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, Subscription } from 'rxjs';
import { IUser } from 'src/app/model/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  users: IUser[] = [];
  loading:boolean=false;
  searchForm: FormGroup = new FormGroup({});
  filteredTxt: string = '';

  // subscriptions
  userSubscription: Subscription = new Subscription;
  formSubscription: Subscription = new Subscription;

  constructor(private apiSvc: ApiService) { }

  ngOnInit(): void {
    this.getUsers();
    this.initForm()
  }

  getUsers() {
    this.loading = true;
    this.userSubscription = this.apiSvc.getUsers().subscribe(res => {
      this.users = res;
      this.loading = false;
    })
  }

  initForm() {
    this.searchForm = new FormGroup({
      text: new FormControl('')
    })
    this.listenValueChange()
  }

  listenValueChange() {
    this.formSubscription = this.searchForm.valueChanges
      .pipe(debounceTime(100))
      .subscribe(res => {
        this.filteredTxt = res.text;
      })
  }

  ngOnDestroy(): void {
    if(this.userSubscription) this.userSubscription.unsubscribe()
    if(this.formSubscription) this.formSubscription.unsubscribe()
  }
}
