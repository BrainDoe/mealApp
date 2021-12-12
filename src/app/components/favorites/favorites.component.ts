import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';
import { Meal } from '../models/meals.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites: Meal[] = []

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit(): void {
    this.favorites = this.favoritesService.getfavorites()
  }

}
