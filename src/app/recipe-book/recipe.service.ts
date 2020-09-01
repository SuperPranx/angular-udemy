import {EventEmitter} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor() {
  }

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe 01 (Pizza)',
      'A tasty test pizza',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [
        new Ingredient('Pizza Dough', 1),
        new Ingredient('Ketchup', 75),
        new Ingredient('Cheese', 200),
        new Ingredient('Pepperoni', 150)
      ]),
    new Recipe(
      'A Test Recipe 02 (Chicken Soup)',
      'A tasty test soup',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Soup', 1)
      ])
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
