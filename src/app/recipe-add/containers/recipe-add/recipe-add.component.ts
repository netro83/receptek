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
        url: ['']
    });
    recipeAddImage = undefined;
    recipeUploadIsProgress = false;

    constructor(
        private formBuilder: FormBuilder,
        private firebaseRecipeService: FirebaseRecipeService
    ) {
    }

    ngOnInit(): void {
    }

    onFileSelected(event: any): void {
        console.log(event);
        this.recipeAddImage = event.target.files[0];
    }

    recipeAdd(): void {
        this.recipeUploadIsProgress = true;
        const {title, url} = this.recipeAddForm.getRawValue();
        this.firebaseRecipeService.firebaseRecipeSave(
            {title: title, url: url, image: this.recipeAddImage}
        ).then((e) => {
            console.log('UP ', e);
            this.recipeUploadIsProgress = false;
        })
    }

}
