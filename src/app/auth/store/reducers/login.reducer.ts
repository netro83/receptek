import {createReducer, on} from "@ngrx/store";
import {initialLoginState} from "./login.state";
import {
    checkTokenAction,
    failedTokenAction,
    loginAction,
    refreshTokenAction,
    saveTokenAction
} from "../actions/login.actions";
import {LoginStoreResponseInterface} from "../../interfaces/login.interface";

export const loginReducer = createReducer(
    initialLoginState,
    on(loginAction, checkTokenAction, refreshTokenAction, (_state: LoginStoreResponseInterface, {}) => {
        return {
            ..._state, requestState: 'PENDING'
        }
    }),
    on(saveTokenAction, (_state: LoginStoreResponseInterface, {email, token, userId}) => {
        return {
            ..._state, requestState: 'RESOLVED', email: email, token: token, userId: userId
        }
    }),
    on(failedTokenAction, (_state: LoginStoreResponseInterface, {}) => {
        return {
            ..._state, requestState: 'REJECTED'
        }
    }),
);


