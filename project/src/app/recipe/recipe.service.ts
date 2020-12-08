import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../common/ingredient.model';
import { ShoppingService } from '../shopping/shopping.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a desc',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg',
      [new Ingredient('meat', 1), new Ingredient('french fries', 20)]
    ),
    new Recipe(
      'A Second Test Recipe',
      'This is a second desc',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg',
      [new Ingredient('potato', 1), new Ingredient('tomato', 20)]
    ),
  ];

  constructor(private shoppingService: ShoppingService) {}

  get getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }
}
