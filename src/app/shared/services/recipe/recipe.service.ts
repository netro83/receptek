import {Injectable} from "@angular/core";
import {initializeApp} from "firebase/app";
import {environment} from "../../../../environments/environment";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {RecipeDataInterface} from "../../interfaces/recipe-add.interface";
import {Store} from "@ngrx/store";
import {loginSelectorUser} from "../../../auth/store/selectors/login.selector";
import {LoginStoreSelectorInterface} from "../../../auth/interfaces/login.interface";
import {Constants} from "../../configs/config";
import {UploadTaskSnapshot} from "@angular/fire/compat/storage/interfaces";

@Injectable()
export class FirebaseRecipeService {

    app = initializeApp(environment.firebase);
    db = getFirestore(this.app);

    constructor(
        private store: Store,
        private firebaseStorage: AngularFireStorage
    ) {

    }

    async firebaseRecipeSave(data: RecipeDataInterface): Promise<any> {

        return new Promise((resolve, reject) => {
            try {
                if (data.image !== undefined) {
                    const task = this.firebaseStorage.upload(Constants.FILE_PATH_NAME, data.image);
                    task.snapshotChanges().subscribe((snapshot: UploadTaskSnapshot | undefined) => {
                        if (snapshot.state === 'success') {
                            snapshot.ref.getDownloadURL().then((url: string) => {
                                this.uploadFile(data, url).then(()=>{
                                    resolve(true);
                                });
                            });
                        }
                    });
                } else {
                    this.uploadFile(data, 'undefined').then(()=>{
                        resolve(true);
                    });
                }
                return
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        });
    }

    uploadFile(data: RecipeDataInterface, image: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.store.select(loginSelectorUser).subscribe(async (e: LoginStoreSelectorInterface) => {
                await addDoc(collection(this.db, "recipes"), {...data, user: e.userId, image: image})
                    .then(() => {
                        resolve(true);
                    })
                    .catch((error) => {
                        reject(false);
                    });
            });
        });
    }
}
