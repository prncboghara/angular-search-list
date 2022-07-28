import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { user, users } from '../spec-helpers/users.spec.helper';
import { IUser } from '../model/user';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ApiService);
    controller = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getUsers() should provide data', () => {
    service.getUsers().subscribe((res: IUser[]) => {
      expect(res).toEqual(users);
    });

    const url = `${environment.api_end_point}/users`
    controller.expectOne(url).flush(users);
  });

  it('#getUser() should provide data', () => {
    const id = '1'
    service.getUserById(id).subscribe((res: IUser) => {
      expect(res).toEqual(user);
    });

    const url = `${environment.api_end_point}/users/${id}`
    controller.expectOne(url).flush(user);
  });

});
