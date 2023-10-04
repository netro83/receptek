import {createAction} from "@ngrx/store";
import {Actions, ofType} from "@ngrx/effects";
import {regUser} from "../actions/reg.actions";
import {catchError, map, of, repeat, switchMap, tap} from "rxjs";

export class RegEffetct {

    // regAction$ = createAction(
    //     this.action$.pipe(
    //         ofType(regUser),
    //         switchMap(async (value)=> )
    //     )
    // )

    constructor(
        private action$ : Actions
    ) {
    }
}
