import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { DetailFieldsComponent } from './detail-fields.component';

describe('DetailFieldsComponent', () => {
  let component: DetailFieldsComponent;
  let fixture: ComponentFixture<DetailFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailFieldsComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
