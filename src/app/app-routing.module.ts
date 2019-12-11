import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//
// Auth libs
//

import { AuthGuard } from 'auth';

import { PlaceholderComponent } from '@app/core/components/placeholder/placeholder.component';


const routes: Routes = [



  {
    path: 'sales',
    children: [
      {
        path: '',
        loadChildren: './lazy-loading/sales-lib-wrapper.module#SalesLibWrapperModule'
      }
    ]
  },

  {
    path: 'logistic',
    children: [
      {
        path: '',
        loadChildren: './lazy-loading/logistic-lib-wrapper.module#LogisticLibWrapperModule'
      }
    ]
  },
  
  {
    // path: 'sales/leads',
    path: 'leads',
    component: PlaceholderComponent,
    //canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always'
  },

  {
    // path: 'sales/opportunities',
    path: 'opportunities',
    component: PlaceholderComponent,
    //canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always'
  },

  //
  // The Wildcard route
  //

  {
    path: '**',
    redirectTo: 'leads'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

