import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Shnitzel',
      'Shnitzel and Fries',
      'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('French Fries', 5)
      ]),
    new Recipe(
      'Hamburger',
      'Yammy Hamburger',
      'https://www.thesun.co.uk/wp-content/uploads/2016/09/nintchdbpict000264481984.jpg?w=960',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Buns', 2),
        new Ingredient('Onions', 3)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
