import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule, routingComponents } from './app-routing.module';
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
import { HeaderComponent } from './header/header.component';
import { NavStudentComponent } from './nav-student/nav-student.component';
import { NavRecruiterComponent } from './nav-recruiter/nav-recruiter.component';
import { MainAppComponent } from './main-app/main-app.component';
import { EditProfileStudentModalComponent } from './components/modals/edit-profile-student-modal/edit-profile-student-modal.component';
import { EditProfileRecruiterModalComponent } from './components/modals/edit-profile-recruiter-modal/edit-profile-recruiter-modal.component';
import { WriteReviewModalComponent } from './components/modals/write-review-modal/write-review-modal.component';
import { AddFiltersModalComponent } from './components/modals/add-filters-modal/add-filters-modal.component';
import { AddEditJobPostModalComponent } from './components/modals/add-edit-job-post-modal/add-edit-job-post-modal.component';
import { ViewDetailsModalComponent } from './components/modals/view-details-modal/view-details-modal.component';
import { SecurityModalComponent } from './components/modals/security-modal/security-modal.component';
import { UploadCvModalComponent } from './components/modals/upload-cv-modal/upload-cv-modal.component';
import { AddEditProjectModalComponent } from './components/modals/add-edit-project-modal/add-edit-project-modal.component';
import { ChangePassModalComponent } from './components/modals/change-pass-modal/change-pass-modal.component';
import { ReportIssuesModalComponent } from './components/modals/report-issues-modal/report-issues-modal.component';
import { DeleteAccountModalComponent } from './components/modals/delete-account-modal/delete-account-modal.component';
import { SettingsModalComponent } from './components/modals/settings-modal/settings-modal.component';
import { NotifApprovedModalComponent } from './components/modals/notif-approved-modal/notif-approved-modal.component';
import { NotifClosedModalComponent } from './components/modals/notif-closed-modal/notif-closed-modal.component';
import { NotifInterviewModalComponent } from './components/modals/notif-interview-modal/notif-interview-modal.component';
import { NotifBadgeModalComponent } from './components/modals/notif-badge-modal/notif-badge-modal.component';
import { NotifDeclinedModalComponent } from './components/modals/notif-declined-modal/notif-declined-modal.component';

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
    WelcomeComponent,
    HeaderComponent,
    NavStudentComponent,
    NavRecruiterComponent,
    routingComponents,
    MainAppComponent,
    EditProfileStudentModalComponent,
    EditProfileRecruiterModalComponent,
    WriteReviewModalComponent,
    AddFiltersModalComponent,
    AddEditJobPostModalComponent,
    ViewDetailsModalComponent,
    SecurityModalComponent,
    UploadCvModalComponent,
    AddEditProjectModalComponent,
    ChangePassModalComponent,
    ReportIssuesModalComponent,
    DeleteAccountModalComponent,
    SettingsModalComponent,
    NotifApprovedModalComponent,
    NotifClosedModalComponent,
    NotifInterviewModalComponent,
    NotifBadgeModalComponent,
    NotifDeclinedModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  entryComponents: [EditProfileStudentModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
