import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Schnitzel',
            'This is simply a test',
            'http://maxpixel.freegreatpicture.com/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg', [
                new Ingredient('Meat', 1), new Ingredient('French fries', 20)
            ]),
        new Recipe('Spheggeti','Another test recipe','http://maxpixel.freegreatpicture.com/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg', [])
    ];

    constructor(private slService: ShoppingListService){}

    getRecipes() {
        // slice so we get a copy and not a direct instance of object / aray
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes.slice()[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

}
