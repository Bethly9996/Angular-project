import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.module";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>()
   private  recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel', 'A super-tasty Schnitzel - just awesome', 
        'https://c.stocksy.com/a/vym500/z9/1379929.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Big fat Burger', 'What else you need to say?',
         'https://demo.wpexperts.io/wholesale-for-woocommerce/wp-content/uploads/2021/10/istockphoto-1254672762-170667a.jpg',
         [
          new Ingredient('Buns', 2),
          new Ingredient('Meat', 1)
         ])
      ];

      constructor(private slService: ShoppingListService) {}
      getRecipes() {
        return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[])  {
        this.slService.addIngredients(ingredients);
      }
}