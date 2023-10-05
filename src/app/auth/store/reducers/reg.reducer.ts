import {createReducer, on} from "@ngrx/store";
import {initialRegState} from "./reg.state";
import {regUser, regUserIsFailed, regUserIsSuccess} from "../actions/reg.actions";
import {RegReducerInterface} from "../../interfaces/reg.interface";

export const regReducer = createReducer(
    initialRegState,
    on(regUser, (_state: RegReducerInterface, {email}) => {
        return {
            ..._state, requestState: 'PENDING', email: email
        }
    }),
    on(regUserIsSuccess, (_state: RegReducerInterface, {}) => {
        return {
            ..._state, requestState: 'RESOLVED'
        }
    }),
    on(regUserIsFailed, (_state: RegReducerInterface, {}) => {
        return {
            ..._state, requestState: 'REJECTED'
        }
    })
)
