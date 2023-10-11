import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {RecipeListGuard} from "./shared/guards/recipe-list";
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {environment} from '../environments/environment';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getDatabase, provideDatabase} from '@angular/fire/database';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {AuthService} from "./auth/services/auth.services";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {FIREBASE_OPTIONS} from "@angular/fire/compat";
import {ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AuthStoreModule} from './shared/store/auth-store.module';
import {StorageService} from './shared/services/storage/storage.service';
import {EffectsModule} from '@ngrx/effects';
import {FirebaseRecipeService} from "./shared/services/recipe/recipe.service";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireDatabaseModule,
        StoreModule.forRoot({}, {}),
        EffectsModule.forRoot([]),
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideDatabase(() => getDatabase()),
        provideFirestore(() => getFirestore()),
        ReactiveFormsModule,
        StoreDevtoolsModule.instrument(),
        AuthStoreModule,
        EffectsModule.forRoot([])
    ],
    providers: [
        RecipeListGuard,
        AuthService,
        StorageService,
        FirebaseRecipeService,
        {provide: FIREBASE_OPTIONS, useValue: environment.firebase}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
