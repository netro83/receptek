import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.services";
import {FormGroup, NonNullableFormBuilder} from "@angular/forms";
import {LoginFormInterface} from "../../interfaces/login.interface";
import {Store} from "@ngrx/store";
import {loginAction} from "../../store/actions/login.actions";
import {AUTH_LOGIN, AUTH_REG, AUTH} from "../../../shared/constants/route.const";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public regLink = `/${AUTH}/${AUTH_REG}`;

    login: FormGroup<LoginFormInterface> = this.formBuilder.group({
        email: ['hj@wpo.hu'],
        password: ['123456']
    });

    constructor(
        private authService: AuthService,
        private formBuilder: NonNullableFormBuilder,
        private store: Store
    ) {
    }

    ngOnInit(): void {

    }

    loginUser(): void {
        const {email, password} = this.login.getRawValue();

        this.store.dispatch(
            loginAction({
                email: email,
                password: password
            })
        );
    }
}
