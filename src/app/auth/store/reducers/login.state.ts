import {LoginStoreResponseInterface} from "../../interfaces/login.interface";

export const initialLoginState: LoginStoreResponseInterface = {
    requestState: 'IDLE',
    email: null,
    token: null
};
