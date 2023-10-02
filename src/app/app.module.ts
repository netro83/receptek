import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './auth/containers/login/login.component';
import {RegComponent} from './auth/containers/reg/reg.component';
import {LostpwComponent} from './auth/containers/lostpw/lostpw.component';
import {RecipeReadComponent} from './recipe-read/containers/recipe-read/recipe-read.component';
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
import { AuthStoreModule } from './shared/store/auth-store.module';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegComponent,
        LostpwComponent,
        RecipeReadComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireDatabaseModule,
        StoreModule.forRoot({}, {}),
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideDatabase(() => getDatabase()),
        provideFirestore(() => getFirestore()),
        ReactiveFormsModule,
        StoreDevtoolsModule.instrument(),
        AuthStoreModule
    ],
    providers: [
        RecipeListGuard,
        AuthService,
        {provide: FIREBASE_OPTIONS, useValue: environment.firebase}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
