import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DiscoverComponent } from './components/discover/discover.component';
import { InterestsComponent } from './components/interests/interests.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ProfilePreviewComponent } from './components/profile-preview/profile-preview.component';
import { ProfileRecruitersComponent } from './components/profile-recruiters/profile-recruiters.component';
import { RolesComponent } from './components/roles/roles.component';
import { SecuritySettingsComponent } from './components/security-settings/security-settings.component';
import { ShortlistComponent } from './components/shortlist/shortlist.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpRecruiterComponent } from './components/sign-up-recruiter/sign-up-recruiter.component';
import { SignUpStudentComponent } from './components/sign-up-student/sign-up-student.component';
import { ProfileStudentComponent } from './components/profile-student/profile-student.component';
import { TipsComponent } from './components/tips/tips.component';
import { UpskillingComponent } from './components/upskilling/upskilling.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { CoverLetterComponent } from './components/cover-letter/cover-letter.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    DiscoverComponent,
    InterestsComponent,
    JobsComponent,
    NotificationsComponent,
    ProfilePreviewComponent,
    ProfileRecruitersComponent,
    RolesComponent,
    SecuritySettingsComponent,
    ShortlistComponent,
    SignInComponent,
    SignUpRecruiterComponent,
    SignUpStudentComponent,
    ProfileStudentComponent,
    TipsComponent,
    UpskillingComponent,
    ViewDetailsComponent,
    CoverLetterComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
