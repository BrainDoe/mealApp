import { Ingredient } from "./ingriedients.model";

export class Meal {
  public name!: string; // name: string|undefined; also works
  public description!: string;
  public imagePath!: string;
  public contributor!: string;
  public published!: boolean;
  public ingredients!: Ingredient[];

  constructor(name: string, desc: string, contributor: string, imagePath: string, published: boolean, ingredients: Ingredient[]){
    this.name = name;
    this.description = desc;
    this.contributor = contributor
    this.imagePath = imagePath,
    this.published = published;
    this.ingredients = ingredients
  }
}