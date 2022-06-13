import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn.loveandlemons.com/wp-content/uploads/2019/09/easy-dinner-ideas-1-741x1024.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/pulled-chicken-beans-b903c2e.jpg?quality=90&webp=true&resize=750,681')
  ];

  constructor() { }

  ngOnInit(): void {
  }

    onRecipeSelected(recipe: Recipe) {
      this.recipeWasSelected.emit(recipe);
    }
}
