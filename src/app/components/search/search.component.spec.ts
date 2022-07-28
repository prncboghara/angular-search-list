import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { user, users } from 'src/app/spec-helpers/users.spec.helper';
import { ApiService } from 'src/app/services/api.service';
import { SearchInputComponent } from '../shared/search-input/search-input.component';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let fakeAPIService: ApiService;

  beforeEach(async () => {
    // fake api service
    fakeAPIService = jasmine.createSpyObj<ApiService>(
      'ApiService',
      {
        getUsers: of(users)
      }
    );

    await TestBed.configureTestingModule({
      declarations: [ SearchComponent, SearchInputComponent ],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{
        provide:ApiService, useValue:fakeAPIService
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check app-search-input', () => {
    const { debugElement } = fixture;
    const search_input = debugElement.query(By.css('app-search-input'));
    expect(search_input).toBeTruthy();
  })

  it('should check app-lists', () => {
    const { debugElement } = fixture;
    const lists = debugElement.query(By.css('app-lists'));
    expect(lists).toBeTruthy();
  })
  
  it('should check #getUsers()', () => {
    component.getUsers();
    expect(component.users.length).toBe(2)
  })
});
