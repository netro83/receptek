import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

    input1: string = '';


    constructor() {
    }

    ngOnInit(): void {
    }

    async firebaseSave(): Promise<any> {

    }

}
