import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { EditMealComponent } from './components/edit-meal/edit-meal.component';
import { MealDetailsComponent } from "./components/meal-details/meal-details.component";
import { MyProfileComponent } from "./components/my-profile/my-profile.component";
import { PublicMealsComponent } from "./components/public-meals/public-meals.component";
import { SingleMealsDetailsComponent } from './components/single-meals-details/single-meals-details.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { OrdersComponent } from './components/orders/orders.component';



const appRoute: Routes = [
  { path: '', redirectTo: '/public-meals', pathMatch: 'full' },
  { path: 'public-meals', component: PublicMealsComponent },
  { path: 'meal-details/:id', component: MealDetailsComponent },
  { path: 'my-profile', component: MyProfileComponent, 
    children: [
      { path: '', redirectTo: '/my-profile', pathMatch: 'full' },
      { path: 'new', component: EditMealComponent },
      { path: ':id', component: SingleMealsDetailsComponent },
      { path: ':id/edit', component: EditMealComponent },
    ]
  },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'orders', component: OrdersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }