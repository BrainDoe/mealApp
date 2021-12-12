import { Component, Input, OnInit } from '@angular/core';
import { Meal } from '../../models/meals.model';

@Component({
  selector: 'app-single-meal',
  templateUrl: './single-meal.component.html',
  styleUrls: ['./single-meal.component.css']
})
export class SingleMealComponent implements OnInit {
  @Input() meal!: Meal
  @Input() index!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
