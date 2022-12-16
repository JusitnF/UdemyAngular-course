import {  Injectable} from '@angular/core';


import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {


  private recipes: Recipe[]= [
      new Recipe(
            'Steak',
            'Juicy thick meat!',
            'https://www.eatwell101.com/wp-content/uploads/2020/10/Garlic-Butter-Steak-recipe-roasted-in-Oven.jpg',
            [
              new Ingredient('Meat', 1),
              new Ingredient('Potato', 1)
            ]),
      new Recipe(
            'Texas Steakhouse Buns',
            'Best copycat buns around',
            'https://www.jocooks.com/wp-content/uploads/2012/08/texas-roudhouse-rolls-1.jpg',
            [
              new Ingredient('Milk', 1),
              new Ingredient('Flour', 1)
            ])
  ];

  constructor(private SLService: ShoppingListService) {}

  getRecipes() {
  // will only make a copy of the privately made recipe list above with the .slice
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.SLService.addIngredients(ingredients);
  }
}
