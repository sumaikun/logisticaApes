import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocumentsComponent } from './components/documents/documents.component';

import { AccountsComponent } from './components/accounts/accounts.component';

import { AccountsWizardComponent } from './components/accounts-wizard/accounts-wizard.component';

import { ContactsComponent } from './components/contacts/contacts.component';

import { ContactsWizardComponent } from './components/contacts-wizard/contacts-wizard.component';
//
// Auth libs
//

import { AuthGuard } from 'auth';

//import { CanDeactivateGuard } from './guards/can-deactivate/can-deactivate.guard';



const routes: Routes = [

  {
    path: 'documents',
    component: DocumentsComponent,
    //canActivate: [AuthGuard],
    //canDeactivate: [CanDeactivateGuard],
    //runGuardsAndResolvers: 'always'
  },
  {
    path: 'accounts',
    component: AccountsComponent,
    //canActivate: [AuthGuard],
    //canDeactivate: [CanDeactivateGuard],
    //runGuardsAndResolvers: 'always'
  },
  {
    path: 'accounts/new',
    component: AccountsWizardComponent,
    //canActivate: [AuthGuard],
    //runGuardsAndResolvers: 'always'
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    //canActivate: [AuthGuard],
    //runGuardsAndResolvers: 'always'
  },
  {
    path: 'contacts/new',
    component: ContactsWizardComponent,
    //canActivate: [AuthGuard],
    //runGuardsAndResolvers: 'always'
  },

];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class LazyLibRoutingModule {}

// https://stackoverflow.com/questions/40380726/angular2-router-canactivate-after-logout

/*

{
  path: 'dashboards',
  loadChildren: './lazy-loading/dashboard-lib-wrapper.module#DashboardLibWrapperModule',
  component: DashboardComponent,
  canActivate: [AuthGuard],
  runGuardsAndResolvers: 'always'
},

*/
