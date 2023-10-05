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

export interface LoginStoreResponseInterface {
    requestState: RequestStateType;
    token: string | null;
    email: string | null;
}

export interface LoginStoreFirebaseInterface {
    token: string | null;
    email: string | null;
}

