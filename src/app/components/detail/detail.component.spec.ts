import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { user } from 'src/app/spec-helpers/users.spec.helper';

import { DetailComponent } from './detail.component';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let fakeAPIService: ApiService;

  beforeEach(async () => {
    // fake api service
    fakeAPIService = jasmine.createSpyObj<ApiService>(
      'ApiService',
      {
        getUserById: of(user)
      }
    )
    await TestBed.configureTestingModule({
      declarations: [ DetailComponent ],
      imports: [RouterModule.forRoot([]), HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{
        provide:ApiService, useValue:fakeAPIService
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    component.userId = "1";
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check #getUsers()', () => {
    component.getUser();
    expect(component.user).toEqual(user)
  })
  
  it('should check app-detail-fields', () => {
    const { debugElement } = fixture;
    const detail = debugElement.query(By.css('app-detail-fields'));
    expect(detail).toBeTruthy();
  })
});
