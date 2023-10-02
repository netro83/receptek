import {createAction, createActionGroup, props} from '@ngrx/store';
import {RequestStateType} from "../../../shared/types/request-state.type";
import {LoginInterface} from "../../interfaces/login.interface";

export interface PostLoginAction {
    readonly loginRequest: LoginInterface;
}

export const loginAction = createAction('User Connect Firebase', props<{ email: string, password: string }>());
export const saveTokenAction = createAction('Save Data', props<{ requestState: RequestStateType, email: string, token: string }>());

// export const loginAuthDatas = createActionGroup({
//     source: 'LOGIN',
//     events: {
//         'User Connect Firebase': props<{ email: string, password: string }>(),
//         'Save Data': props<{ requestState: RequestStateType, email: string, token: string }>()
//     }
// });
