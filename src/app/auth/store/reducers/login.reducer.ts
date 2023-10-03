import {createReducer, on} from "@ngrx/store";
import {initialLoginState} from "./login.state";
import {checkTokenAction, failedTokenAction, loginAction, saveTokenAction} from "../actions/login.actions";
import {LoginStoreResponseInterface} from "../../interfaces/login.interface";

export const loginReducer = createReducer(
    initialLoginState,
    on(loginAction, (_state: LoginStoreResponseInterface, {email, password}) => {
        return {
            ..._state, requestState: 'PENDING', email: email, password: password
        }
    }),
    on(saveTokenAction, (_state: LoginStoreResponseInterface, {email, token}) => {
        return {
            ..._state, requestState: 'RESOLVED', email: email, token: token
        }
    }),
    on(failedTokenAction, (_state: LoginStoreResponseInterface, {}) => {
        return {
            ..._state, requestState: 'REJECTED'
        }
    }),
    on(checkTokenAction, (_state: LoginStoreResponseInterface, {}) => {
        return {
            ..._state, requestState: 'PENDING'
        }
    })
);


