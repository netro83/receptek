import {LoginStoreResponseInterface} from "../../interfaces/login.interface";

export const initialLoginState: LoginStoreResponseInterface = {
    requestState: 'IDLE',
    email: undefined,
    token: undefined,
    userId: undefined
};
