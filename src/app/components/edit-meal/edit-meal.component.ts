import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Meal } from '../models/meals.model';
import { MealsService } from 'src/app/services/meals.service';

@Component({
  selector: 'app-edit-meal',
  templateUrl: './edit-meal.component.html',
  styleUrls: ['./edit-meal.component.css']
})
export class EditMealComponent implements OnInit {
  id!: number;
  editMode = false;
  mealForm!: FormGroup;

  constructor(private route: ActivatedRoute, private mealsService: MealsService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.editMode = params['id'] != null;
      this.initForm();
      // console.log(this.editMode)
    })
  }


  controls() {
    return (<FormArray>this.mealForm.get('ingredients')).controls;
  }

  onSubmit() {
    const newMeal = new Meal(
      this.mealForm.value['name'],
      this.mealForm.value['description'],
      this.mealForm.value['imagePath'],
      this.mealForm.value['ingredients'],
      this.mealForm.value['author'],
      this.mealForm.value['published'],
      );
    if(this.editMode) {
      this.mealsService.updateMeal(this.id, newMeal); // Optionally pass on th this.recipeForm.value as replacement for newRecipe. Because we have explicitly defined it. 
    } else {
      this.mealsService.addMeal(newMeal);
    }
    this.onCancel()
  }

  private initForm() {
    let mealName = '';
    let mealImagePath = '';
    let mealDescription = '';
    let mealIngredients = new FormArray([])

    if(this.editMode) {
      const meal = this.mealsService.getMeal(this.id)
      mealName = meal.name
      mealImagePath = meal.imagePath
      mealDescription = meal.description;
      if(meal['ingredients']) {
        for(let ingredient of meal.ingredients) {
          mealIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          )
        }

      }
    }

    this.mealForm = new FormGroup({
      'name': new FormControl(mealName, Validators.required),
      'imagePath': new FormControl(mealImagePath, Validators.required),
      'description': new FormControl(mealDescription, Validators.required),
      'ingredients': mealIngredients
    });
  }

  onAddIngredient(){
    (<FormArray>this.mealForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      })
    )
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.mealForm.get('ingredients')).removeAt(index)
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route})
  }

}
