import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeservice: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(){
    this.route.params.subscribe (
      (params: Params) => { this.id = +params['id'];
      this.recipe = this.recipeservice.getRecipe(this.id)
      })

    }
    onEditRecipe(){
this.router.navigate (['edit'], {relativeTo: this.route})
    }


    onAddToShoppingList() {
      this.recipeservice.addIngredientsToShoppingList(this.recipe.ingredients);
    }

  }

