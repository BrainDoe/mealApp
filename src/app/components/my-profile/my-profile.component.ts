import { Component, OnInit } from '@angular/core';
import { Meal } from '../models/meals.model';
import { MealsService } from 'src/app/services/meals.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  meals: Meal[] = [];
  
  constructor(private mealsService: MealsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.meals = this.mealsService.getMeals();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

}
