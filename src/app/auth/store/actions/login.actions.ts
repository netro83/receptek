import {createAction, props} from '@ngrx/store';


export const checkTokenAction = createAction('Check the storage');

export const loginAction = createAction('User Connect Firebase', props<{ email: string, password: string }>());

export const saveTokenAction = createAction('Save Data', props<{ email: string, token: string }>());

export const failedTokenAction = createAction('Failed Save Data');
