import {createAction, props} from '@ngrx/store';
import {LoginInterface, LoginStoreFirebaseInterface} from "../../interfaces/login.interface";

const loginID = '[LOGIN]';

export const checkTokenAction = createAction(`${loginID} Check the storage`);

export const loginAction = createAction(`${loginID} Login to firebase DB`, props<LoginInterface>());

export const saveTokenAction = createAction(`${loginID} Save Data`, props<LoginStoreFirebaseInterface>());

export const failedTokenAction = createAction(`${loginID} Failed Save Data`);

export const refreshTokenAction = createAction(`${loginID} Refresh User Token`)
