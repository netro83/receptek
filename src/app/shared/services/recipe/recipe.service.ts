import {inject, Injectable} from "@angular/core";
import {initializeApp} from "firebase/app";
import {environment} from "../../../../environments/environment";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {Database} from '@angular/fire/database';
import {RecipeDataInterface} from "../../interfaces/recipe-add.interface";
import {Store} from "@ngrx/store";
import {loginUserSelector} from "../../../auth/store/selectors/login.selector";
import {LoginStoreSelectorInterface} from "../../../auth/interfaces/login.interface";
import {Constants} from "../../configs/config";
import {UploadTaskSnapshot} from "@angular/fire/compat/storage/interfaces";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {slugifyConst} from "../../constants/slugify.const";

@Injectable()
export class FirebaseRecipeService {

    app = initializeApp(environment.firebase);
    db = getFirestore(this.app);
    private database: Database = inject(Database);

    constructor(
        private store: Store,
        private firebaseStorage: AngularFireStorage,
        private firebaseDatabase: AngularFireDatabase,
        private firebaseStore: AngularFirestore
    ) {

    }

    firebaseRecipeRead(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.store.select(loginUserSelector).subscribe(async (e: LoginStoreSelectorInterface) => {
                if (e.requestState === 'RESOLVED')
                    this.firebaseStore.collection('recipes', ref => ref.where('user', '==', e.userId)).valueChanges().subscribe((e) => {
                        resolve(e);
                    });
            });
        });
    }

    async firebaseRecipeSave(data: RecipeDataInterface): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                if (data.image !== undefined) {
                    const task = this.firebaseStorage.upload(Constants.FILE_PATH_NAME, data.image);

                    task.snapshotChanges().subscribe((snapshot: UploadTaskSnapshot | undefined) => {
                        if (snapshot.state === 'success') {
                            snapshot.ref.getDownloadURL().then((url: string) => {
                                this.uploadFile(data, url).then(() => {
                                    resolve(true);
                                });
                            });
                        }
                    });
                } else {
                    this.uploadFile(data, 'undefined').then(() => {
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
            this.store.select(loginUserSelector).subscribe(async (e: LoginStoreSelectorInterface) => {
                await addDoc(collection(this.db, "recipes"),
                    {
                        ...data,
                        user: e.userId,
                        image: image,
                        id: `${e.userId}-${slugifyConst(data.title)}-${Date.now()}`
                    })
                    .then((w) => {
                        console.log(w);
                        resolve(true);
                    })
                    .catch((error) => {
                        reject(false);
                    });
            });
        });
    }
}
