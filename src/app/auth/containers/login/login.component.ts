import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.services";
import {FormGroup, NonNullableFormBuilder} from "@angular/forms";
import {LoginFormInterface} from "../../interfaces/login.interface";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    login: FormGroup<LoginFormInterface> = this.formBuilder.group({
        email: ['hj@wpo.hu'],
        password: ['123456']
    });

    constructor(
        private authService: AuthService,
        private formBuilder: NonNullableFormBuilder
    ) {
    }

    ngOnInit(): void {

    }

    loginUser(): void {
        this.authService.loginUser({
            email: this.login.value.email,
            password: this.login.value.password
        });
    }
}
