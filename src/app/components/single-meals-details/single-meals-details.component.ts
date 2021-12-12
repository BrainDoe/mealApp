import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FavoritesService } from 'src/app/services/favorites.service';
import { MealsService } from 'src/app/services/meals.service';
import { Meal } from '../models/meals.model';

@Component({
  selector: 'app-single-meals-details',
  templateUrl: './single-meals-details.component.html',
  styleUrls: ['./single-meals-details.component.css']
})
export class SingleMealsDetailsComponent implements OnInit {
  id!: number;
  meal!: Meal;

  constructor(
              private mealsService: MealsService, 
              private route: ActivatedRoute, 
              private router: Router,
              private favoritesService: FavoritesService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.meal = this.mealsService.getMeal(this.id);
    })

    this.favoritesService.addToFavorites(this.meal)
  }

  onAddToFavorite(){
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.meal = this.mealsService.getMeal(this.id)
    })
  }

  publishMeal() {
    this.mealsService.publishMeal(this.meal)
  }

}
