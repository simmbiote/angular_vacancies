import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import {RouterModule, Routes} from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';

import {ContenteditableModule} from '@ng-stack/contenteditable';
import {QuillModule} from 'ngx-quill';
import {editorConfig} from './editor-config';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './components/layout/header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {ListComponent} from './components/vacancies/list/list.component';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {JoinUsComponent} from './pages/join-us/join-us.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {AdminComponent} from './pages/admin/admin.component';
import {VacanciesService, AuthenticationService} from './services';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {VacancyFormComponent} from './pages/admin/vacancy-form/vacancy-form.component';
import {
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule,
    MatAccordion,
    MatExpansionModule,
    MatIconModule
} from '@angular/material';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {VacanciesComponent} from './components/modules/vacancies/vacancies.component';
import {Slugify} from './filters/slug.pipe';
import {VacancyComponent, DialogDataComponent} from './components/modules/vacancies/vacancy/vacancy.component';
import {FooterComponent} from './components/layout/footer/footer.component';

import {MatDialogModule} from '@angular/material/dialog';
import {AuthGuard, FakeBackendProvider} from './helpers';
import {LoginComponent} from './components/auth/login/login.component';

const appRoutes: Routes = [
    {path: 'join-us', component: JoinUsComponent},
    {path: 'login', component: LoginComponent},
    {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
    {path: 'admin/:type/:id', component: AdminComponent, canActivate: [AuthGuard]},
    {path: 'vacancies/:department', component: VacanciesComponent},
    {path: 'vacancies/:department/:id', component: VacancyComponent},
    {path: '', component: HomepageComponent},
    {path: '**', component: NotFoundComponent}
];


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ListComponent,
        JoinUsComponent,
        NotFoundComponent,
        HomepageComponent,
        AdminComponent,
        VacancyFormComponent,
        VacanciesComponent,
        Slugify,
        VacancyComponent,
        FooterComponent,
        DialogDataComponent,
        LoginComponent,
    ],
    entryComponents: [DialogDataComponent],
    imports: [

        // Needed for General, Layout.
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
        MatCardModule,
        FlexLayoutModule,
        MatIconModule,
        MatDividerModule,
        MatDialogModule,

        // Needed for FORMS
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        MatSelectModule,
        MatCheckboxModule,
        MatTableModule,
        MatExpansionModule,
        ContenteditableModule,
        QuillModule.forRoot(editorConfig),

        // Needed for DB INTERACTIONS
        FormsModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,

        // ROUTING
        RouterModule.forRoot(
            appRoutes,
            // { enableTracing: true } // <-- debugging purposes only
        ),

        // BACKEND LOGIN
        HttpClientModule,

        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
    ],
    providers: [
        VacanciesService,
        FakeBackendProvider,
        AuthenticationService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
