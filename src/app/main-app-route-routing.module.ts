import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverComponent } from './components/discover/discover.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { ProfileRecruitersComponent } from './components/profile-recruiters/profile-recruiters.component';
import { ProfileStudentComponent } from './components/profile-student/profile-student.component';
import { TipsComponent } from './components/tips/tips.component';
import { UpskillingComponent } from './components/upskilling/upskilling.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainAppRouteRoutingModule { }
