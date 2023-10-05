import {Injectable} from "@angular/core";
import {initializeApp} from "firebase/app";
import {environment} from "../../../../environments/environment";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import {RecipeDataInterface} from "../../interfaces/recipe-add.interface";
import {Store} from "@ngrx/store";
import {loginSelectorUser} from "../../../auth/store/selectors/login.selector";
import {LoginStoreSelectorInterface} from "../../../auth/interfaces/login.interface";

@Injectable()
export class FirebaseRecipeService {

    app = initializeApp(environment.firebase);
    db = getFirestore(this.app);

    constructor(
        private store: Store
    ) {

    }

    async firebaseRecipeSave(data: RecipeDataInterface, user: string): Promise<any> {
        try {
            const usr = this.store.select(loginSelectorUser).subscribe(async (e: LoginStoreSelectorInterface) => {
                const docRef = await addDoc(collection(this.db, "recipes"), {...data, user: e.userId});

                console.log("Document written with ID: ", docRef.id);
            });
            return
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
}
