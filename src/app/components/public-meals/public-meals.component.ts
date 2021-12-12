import { Component, OnInit } from '@angular/core';
import { MealsService } from 'src/app/services/meals.service';
import { Meal } from '../models/meals.model';

@Component({
  selector: 'app-public-meals',
  templateUrl: './public-meals.component.html',
  styleUrls: ['./public-meals.component.css']
})
export class PublicMealsComponent implements OnInit {
  meals: Meal[] = []
  
  constructor(private mealsService: MealsService) { }

  ngOnInit(): void {
    this.meals = this.mealsService.getMeals();
  }


}
