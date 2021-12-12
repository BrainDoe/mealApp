import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { MealsService } from './meals.service';
import { Meal } from '../components/models/meals.model';
import { Ingredient } from '../components/models/ingriedients.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
    // private meals: Meal[] = [];
    favoritesChanged = new Subject<Meal[]>()

    // Mock meals and ingredients
    private favorites: Meal[] = [
      new Meal('A test Meal', 'This is simply a test', 'Donatus Okwe', './assets/images/image1.jpg', true, [
        new Ingredient('meat', 1),
        new Ingredient('Frech Fries', 20)
      ]),
      new Meal('Just another test meal', 'This is simply a test', 'Jack Smith', './assets/images/coronaImg.jpg', true, [
        new Ingredient('Rice', 10),
        new Ingredient('Chicken', 2)
      ]),
    ];

  constructor() { }

  setMeals(favorites: Meal[]) {
    this.favorites = favorites;
    this.favoritesChanged.next(this.favorites.slice());
  }

  getfavorites() {
    return this.favorites.slice();
  }

  addToFavorites(meal: Meal) {
    this.favorites.push(meal);
    this.favoritesChanged.next(this.favorites.slice())
  }
}
