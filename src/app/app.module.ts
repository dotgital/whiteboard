import { ApplicationsDashboardComponent } from './applications-dashboard/applications-dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormListComponent } from './form-list/form-list.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UsersComponent } from './users/users.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {TextFieldModule} from '@angular/cdk/text-field';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ApplicationsComponent } from './applications/applications.component';
import { CreateApplicationComponent } from './applications/create-application/create-application.component';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';
import { ManageApplicationsComponent } from './applications/manage-applications/manage-applications.component';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { GraphQLModule } from './graphql.module';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ApplicationsAdminComponent } from './applications-admin/applications-admin.component';
import { MessageComponent } from './applications-dashboard/message/message.component';
import { ApplicationsStatsComponent } from './applications-stats/applications-stats.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const config: SocketIoConfig = { url: 'https://backend.apartmentsource.com', options: {query: {userId: null}} };


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FormListComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    UsersComponent,
    CreateUserComponent,
    CreateApplicationComponent,
    ApplicationsComponent,
    CreateApplicationComponent,
    WhiteboardComponent,
    ApplicationsDashboardComponent,
    ManageApplicationsComponent,
    ApplicationsAdminComponent,
    MessageComponent,
    ApplicationsStatsComponent,
    ResetPasswordComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSortModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatTableModule,
    MatInputModule,
    MatRadioModule,
    TextFieldModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    ScrollingModule,
    FlexLayoutModule,
    GraphQLModule,
    SocketIoModule.forRoot(config),
    // SocketIoModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CreateUserComponent,
    CreateApplicationComponent,
    MessageComponent,
  ]
})
export class AppModule { }
