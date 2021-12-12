import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { MealsService } from 'src/app/services/meals.service';
import { Meal } from '../models/meals.model';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.css']
})
export class MealDetailsComponent implements OnInit {
  meal!: Meal;
  id!: number;

  constructor(private router: Router, private mealsService: MealsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.meal = this.mealsService.getMeal(this.id);
    })
  }

}
