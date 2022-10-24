import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverComponent } from './components/discover/discover.component';
import { InterestsComponent } from './components/interests/interests.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ProfileRecruitersComponent } from './components/profile-recruiters/profile-recruiters.component';
import { ProfileStudentComponent } from './components/profile-student/profile-student.component';
import { RolesComponent } from './components/roles/roles.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpRecruiterComponent } from './components/sign-up-recruiter/sign-up-recruiter.component';
import { SignUpStudentComponent } from './components/sign-up-student/sign-up-student.component';
import { TipsComponent } from './components/tips/tips.component';
import { UpskillingComponent } from './components/upskilling/upskilling.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MainAppComponent } from './main-app/main-app.component';

const routes: Routes = [
  {path: '', redirectTo: '/welcome', pathMatch: "full"},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'roles', component: RolesComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up-recruiter', component: SignUpRecruiterComponent},
  {path: 'sign-up-student', component: SignUpStudentComponent},
  {path: 'main-app/:type/:id', component: MainAppComponent,
    children: [
      {path: 'interests', component: InterestsComponent},
      {path: 'notifications', component: NotificationsComponent},
      {path: 'student-profile', component: ProfileStudentComponent},
      {path: 'upskilling', component: UpskillingComponent},
      {path: 'tips', component: TipsComponent},
      {path: 'discover', component: DiscoverComponent},
      {path: 'jobs', component: JobsComponent},
      {path: 'jobs/view-details/:jobId', component: ViewDetailsComponent},
      {path: 'recruiter-profile', component: ProfileRecruitersComponent},
    ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProfileStudentComponent,
  UpskillingComponent,
  TipsComponent,
  DiscoverComponent,
  ProfileRecruitersComponent,
  WelcomeComponent,
  RolesComponent,
  SignInComponent,
  SignUpRecruiterComponent,
  SignUpStudentComponent]
