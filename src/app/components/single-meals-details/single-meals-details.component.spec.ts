import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMealsDetailsComponent } from './single-meals-details.component';

describe('SingleMealsDetailsComponent', () => {
  let component: SingleMealsDetailsComponent;
  let fixture: ComponentFixture<SingleMealsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleMealsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMealsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
