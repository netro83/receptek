import {FormControl} from "@angular/forms";
import * as buffer from "buffer";

export interface RecipeAddInterface {
    title: FormControl<string>;
    url: FormControl<string>;
    image: FormControl<any>;
}
