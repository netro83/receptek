import {createActionGroup, props} from '@ngrx/store';
import {RequestStateType} from "../../../shared/types/request-state.type";

export const loginAuthDatas = createActionGroup({
    source: 'USER',
    events: {
        'Save Data': props<{ requestState: RequestStateType, email: string, token: string }>()
    }
});
