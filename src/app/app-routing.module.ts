import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ApplicationsStatsComponent } from './applications-stats/applications-stats.component';
import { ApplicationsAdminComponent } from './applications-admin/applications-admin.component';
import { ManageApplicationsComponent } from './applications/manage-applications/manage-applications.component';
import { ApplicationsDashboardComponent } from './applications-dashboard/applications-dashboard.component';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';
import { ApplicationsComponent } from './applications/applications.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthGuard } from './services/auth-guard.service';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormListComponent } from './form-list/form-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard/applications-dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], children: [
    { path: 'register', component: RegisterComponent },
    { path: 'forms', component: FormListComponent },
    { path: 'users', component: UsersComponent},
    { path: 'applications', component: ApplicationsComponent },
    { path: 'whiteboard', component: WhiteboardComponent },
    { path: 'applications-stats', component: ApplicationsStatsComponent },
    { path: 'applications-dashboard', component: ApplicationsDashboardComponent },
    { path: 'manage-applications', component: ManageApplicationsComponent },
    { path: 'applications-admin', component: ApplicationsAdminComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
