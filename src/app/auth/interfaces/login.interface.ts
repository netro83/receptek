import {FormControl} from "@angular/forms";
import {RequestStateType} from "../../shared/types/request-state.type";

export interface LoginFormInterface {
    email: FormControl<string>;
    password: FormControl<string>;
}

export interface LoginInterface {
    email: string;
    password: string;
}

export interface LoginStoreInterface {
    requestState: RequestStateType;
    token: string | null;
    email: string | null;
}
