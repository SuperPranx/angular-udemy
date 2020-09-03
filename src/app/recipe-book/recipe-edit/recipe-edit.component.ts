import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipe: Recipe;
  isNewRecipe: boolean;

  constructor(
    private shoppingListService: ShoppingListService,
    private recipeService: RecipeService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.performDataUpdate();

    this.route.params.subscribe(
      params => {
        this.performDataUpdate();
      }
    );
  }

  private performDataUpdate() {
    this.isNewRecipe = this.route.snapshot.data.isNewRecipe;
    if (!this.isNewRecipe) {
      this.recipe = this.recipeService.findRecipe(+this.route.snapshot.params.id);
    }
  }
}
