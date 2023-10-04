import {FormControl} from "@angular/forms";
import {RequestStateType} from "../../shared/types/request-state.type";

export interface RegFormInterface {
    email: FormControl<string>;
    password: FormControl<string>;
}
export interface RegInterface {
    email: string;
    password: string;
}
export interface RegReducerInterface {
    requestState: RequestStateType,
    email: string;
    password: string;
}
