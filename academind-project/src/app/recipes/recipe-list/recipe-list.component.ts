import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { RecipesComponent } from '../recipes.component';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];

  constructor(private recipeservice: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeservice.getRecipes();
  }
  onRecipeSelected (recipe: Recipe){
this.recipeWasSelected.emit(recipe);
  }

}
