import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A test Revipe','This is simply a test','http://maxpixel.freegreatpicture.com/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg'),
        new Recipe('A test Revipe','Another test recipe','http://maxpixel.freegreatpicture.com/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg')
    ];

    getRecipes() {
        // slice so we get a copy and not a direct instance of object / aray
        return this.recipes.slice();
    }

}
