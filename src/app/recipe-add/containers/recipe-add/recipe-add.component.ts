import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {RecipeAddInterface} from "../../interfaces/recipe-add.interface";
import {FirebaseRecipeService} from "../../../shared/services/recipe/recipe.service";

@Component({
    selector: 'app-recipe-add',
    templateUrl: './recipe-add.component.html',
    styleUrls: ['./recipe-add.component.scss']
})
export class RecipeAddComponent implements OnInit {

    recipeAddForm: FormGroup<RecipeAddInterface> = this.formBuilder.group({
        title: [''],
        url: [''],
        image: ['']
    });

    constructor(
        private formBuilder: FormBuilder,
        private firebaseRecipeService: FirebaseRecipeService
    ) {
    }

    ngOnInit(): void {
    }

    recipeAdd(): void {
        const {title, url} = this.recipeAddForm.getRawValue();
        this.firebaseRecipeService.firebaseRecipeSave(
            {title: title, url: url, image: 'undefined'},
            '12'
        )
    }

}
