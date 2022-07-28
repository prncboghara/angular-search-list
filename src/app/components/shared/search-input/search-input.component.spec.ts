import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { SearchInputComponent } from './search-input.component';

describe('SearchInputComponent', () => {
  let component: SearchInputComponent;
  let fixture: ComponentFixture<SearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchInputComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check heading', () => {
    const h3 = fixture.debugElement.query(
      By.css('h3')
    );
    expect(h3.nativeElement.textContent).toEqual('Users List')
  });

  it('should check p', () => {
    const h3 = fixture.debugElement.query(
      By.css('p')
    );
    expect(h3.nativeElement.textContent).toEqual('Users list is retrived from https://jsonplaceholder.typicode.com using API call')
  });

  it('should check p', () => {
    const values = {'text': 'a'};
    component.searchForm.setValue(values)
    expect(component.searchForm.value).toEqual(values)
  });
});
