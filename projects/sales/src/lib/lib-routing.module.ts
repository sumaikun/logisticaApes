import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActivitiesComponent } from './components/activities/activities.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactWizardComponent } from './components/contact-wizard/contact-wizard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

//
// Auth libs
//

import { AuthGuard } from 'auth';

import { CanDeactivateGuard } from './guards/can-deactivate/can-deactivate.guard';

const routes: Routes = [

  {
    path: 'sales/activities',
    component: ActivitiesComponent,
    //canActivate: [AuthGuard],
    //canDeactivate: [CanDeactivateGuard],
    runGuardsAndResolvers: 'always'
  },

  {
    path: 'sales/dashboards',
    component: DashboardComponent,
    //canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always'
  },

  {
    path: 'sales/contacts',
    component: ContactsComponent,
    //canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always'
  },

  {
    path: 'sales/contacts/new',
    component: ContactWizardComponent,
    //canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always'
  },

  {
    path: 'sales/contacts/:id',
    component: ContactComponent,
    //canActivate: [AuthGuard],
    //canDeactivate: [CanDeactivateGuard],
    runGuardsAndResolvers: 'always'
  }

];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class LibRoutingModule {}

// https://stackoverflow.com/questions/40380726/angular2-router-canactivate-after-logout
