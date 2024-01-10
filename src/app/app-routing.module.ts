import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionJWTGuard } from './guards/permission-jwt.guard';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './shared/home/home.component';
import { FinancialComponent } from './views/financial/financial.component';
import { LoginComponent } from './views/login/login.component';
import { SchoolsComponent } from './views/schools/schools.component';
import { StudentFeedbackComponent } from './views/student-feedback/student-feedback.component';
import { StudentsComponent } from './views/students/students.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'students', component: StudentsComponent , canActivate: [PermissionJWTGuard] } ,
  { path: 'schools', component: SchoolsComponent , canActivate: [PermissionJWTGuard]},
  { path: 'financial', component: FinancialComponent , canActivate: [PermissionJWTGuard] },
  { path: 'studentsfeedback', component: StudentFeedbackComponent , canActivate: [PermissionJWTGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
