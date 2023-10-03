import {Injectable} from "@angular/core";
import {Constants} from "../../configs/config";

@Injectable()
export class StorageService {
    constructor() {
    }

    saveToStorage(id: string, value: string): void {
        window.localStorage.setItem(`${Constants.STORAGE_NAME}/${id}`, value);
    }

    getFromStorage(id: string): string | null {
        let elem = window.localStorage.getItem(`${Constants.STORAGE_NAME}/${id}`);

        if (elem !== null) {
            return elem;
        } else {
            return null;
        }
    }
}
