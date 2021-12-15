import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Meal } from '../components/models/meals.model'
import { Ingredient } from '../components/models/ingriedients.model';

@Injectable({
  providedIn: 'root'
})
export class MealsService {
  // private meals: Meal[] = [];
  mealsChanged = new Subject<Meal[]>()

  // Mock meals and ingredients
  private meals: Meal[] = [
    new Meal('A test Meal', 'This is simply a test', 'Donatus Okwe', './assets/images/image1.jpg', true, [
      new Ingredient('meat', 1),
      new Ingredient('Frech Fries', 20)
    ]),
    new Meal('Just another test meal', 'This is simply a test', 'Jack Smith', './assets/images/coronaImg.jpg', true, [
      new Ingredient('Rice', 10),
      new Ingredient('Chicken', 2)
    ]),
    new Meal('Spaghetti', 'My Delicious Spaghetti', 'Brown Nick', './assets/images/coronaImg.jpg', true, [
      new Ingredient('Rice', 10),
      new Ingredient('Chicken', 2)
    ]),
    new Meal('Spaghetti', 'My Delicious Spaghetti', 'Brown Nick', './assets/images/coronaImg.jpg', false, [
      new Ingredient('Rice', 10),
      new Ingredient('Chicken', 2)
    ]),
  ];

  constructor() { }

  setMeals(meals: Meal[]) {
    this.meals = meals;
    this.mealsChanged.next(this.meals.slice());
  }

  getMeals() {
    return this.meals.slice();
  }

  getMeal(index: number) {
    return this.meals[index]
  }

  addMeal(meal: Meal) {
    this.meals.push(meal);
    this.mealsChanged.next(this.meals.slice())
  }

  updateMeal(index: number, newMeal: Meal) {
    this.meals[index] = newMeal;
    this.mealsChanged.next(this.meals.slice())
  }

  publishedMeal(meal: Meal) {
    return this.meals.filter(meal => meal.published === meal.published)
    
    // meal.published = !meal.published
    // this.mealsChanged.next(publishedMeal)
  }
}
