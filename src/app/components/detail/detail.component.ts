import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/model/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit, OnDestroy {
  userSubscription: Subscription = new Subscription;
  routeSubscription: Subscription = new Subscription;
  userId: string | null = null;
  user: IUser|undefined;
  personalSection: {
    label: string,
    fields: {label:string, value:string}[]
  } = {
    label: 'personal info',
    fields: []
  }

  constructor(
    private route: ActivatedRoute,
    private apiSvc: ApiService) {
    this.routeSubscription = route.paramMap.subscribe(
      (params) => {
        this.userId = params.get('id');
      })
  }

  ngOnInit(): void {
    this.getUser()
  }

  getUser() {
    if(!this.userId) return ;
    this.userSubscription = this.apiSvc.getUserById(this.userId).subscribe(res => {
      this.user = res
    })
  }

  ngOnDestroy(): void {
    if(this.userSubscription) this.userSubscription.unsubscribe()
    if(this.routeSubscription) this.routeSubscription.unsubscribe()
  }
}
