import {Injectable} from "@angular/core";
import {Constants} from "../../configs/config";

@Injectable()
export class TokenService {
    constructor() {
    }

    saveToken(token: string): void {
        window.localStorage.setItem(Constants.STORAGE_NAME + '/token', token);
    }

    getToken(): string | null {
        let token = window.localStorage.getItem(Constants.STORAGE_NAME + '/token');

        if (token !== null) {
            return token;
        } else {
            return null;
        }
    }
}
