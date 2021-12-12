import { Component, OnInit, Input } from '@angular/core';
import { Meal } from '../models/meals.model';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  @Input() meal!: Meal 
  @Input() index!: number

  constructor() { }

  ngOnInit(): void {
  }

}
