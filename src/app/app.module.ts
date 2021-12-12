import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PublicMealsComponent } from './components/public-meals/public-meals.component';
import { MealComponent } from './components/meal/meal.component';
import { MealDetailsComponent } from './components/meal-details/meal-details.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { MyFavoritesComponent } from './components/my-favorites/my-favorites.component';
import { SingleMealComponent } from './components/my-profile/single-meal/single-meal.component';
import { SingleMealsDetailsComponent } from './components/single-meals-details/single-meals-details.component';
import { EditMealComponent } from './components/edit-meal/edit-meal.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { OrdersComponent } from './components/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PublicMealsComponent,
    MealComponent,
    MealDetailsComponent,
    MyProfileComponent,
    MyOrdersComponent,
    MyFavoritesComponent,
    SingleMealComponent,
    SingleMealsDetailsComponent,
    EditMealComponent,
    FavoritesComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
