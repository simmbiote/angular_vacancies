import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/layout/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ListComponent } from './components/vacancies/list/list.component';
import { ItemComponent } from './components/vacancies/list/item/item.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { JoinUsComponent } from './pages/join-us/join-us.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AdminComponent } from './pages/admin/admin.component';
import { VacanciesService } from './services/vacancies.service';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { VacancyFormComponent } from './pages/admin/vacancy-form/vacancy-form.component';
import { MatFormFieldModule, MatInputModule, MatRippleModule, MatSelectModule, MatCheckboxModule, MatTableModule, MatAccordion, MatExpansionModule } from '@angular/material';

const appRoutes: Routes = [
  { path: 'join-us', component: JoinUsComponent },
  { path: 'admin', component: AdminComponent  },
  { path: 'admin/vancancy/:id', component: AdminComponent  },
  { path: 'admin/vancancy/:id', component: AdminComponent  },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  { path: '',
  component: HomepageComponent, 
  },
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    ItemComponent,
    JoinUsComponent,
    NotFoundComponent,
    HomepageComponent,
    AdminComponent,
    VacancyFormComponent
        ],
  imports: [

    // Needed for General, Layout.
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,

    // Needed for FORMS 
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule,
    MatExpansionModule,

    // Needed for DB INTERACTIONS
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,

    // ROUTING
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    VacanciesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
