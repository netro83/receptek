import { createReducer, on } from "@ngrx/store";
import { initialLoginState } from "./login.state";
import { loginAuthDatas } from "../actions/login.actions";
import { LoginStoreInterface } from "../../interfaces/login.interface";

export const loginReducer = createReducer(
     initialLoginState,
     on(loginAuthDatas.saveData, (_state: LoginStoreInterface, { requestState, token, email }) => {
          return {
               ..._state, requestState: requestState, token: token, email: email
          }
     })
)
