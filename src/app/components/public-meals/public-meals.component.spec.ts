import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicMealsComponent } from './public-meals.component';

describe('PublicMealsComponent', () => {
  let component: PublicMealsComponent;
  let fixture: ComponentFixture<PublicMealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicMealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
