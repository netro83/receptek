import {RegReducerInterface} from "../../interfaces/reg.interface";

export const initialRegState: RegReducerInterface = {
    requestState: 'IDLE',
    email: null,
    password: null
};
