import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Store} from "@ngrx/store";
import {RegFormInterface} from "../../interfaces/reg.interface";
import {AuthService} from "../../services/auth.services";

@Component({
    selector: 'app-reg',
    templateUrl: './reg.component.html',
    styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {

    reg: FormGroup<RegFormInterface> = this.formBuilder.group({
        email: [''],
        password: ['']
    });

    constructor(
        private formBuilder: FormBuilder,
        private store: Store,
        private auth: AuthService
    ) {
    }

    ngOnInit(): void {
    }

    regUser(): void {
        const {email, password} = this.reg.getRawValue();
        this.auth.registerUser({
            email: email,
            password: password
        })
    // this.store.dispatch(
    //
    // )
    }
}
