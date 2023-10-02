import {LoginStoreInterface} from "../../interfaces/login.interface";

export const initialLoginState: LoginStoreInterface = {
    requestState: 'IDLE',
    email: null,
    token: null
};
