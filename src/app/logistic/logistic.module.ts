import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TranslateModule } from '@ngx-translate/core';

import { DocumentsComponent } from './components/documents/documents.component';


//
// Utils lib
//

import { UtilsModule, LoggerService } from 'utils';
import { AngularMaterialModule } from 'utils';
import { StaticInjectorService } from 'utils';

//
// Serendipity Components lib
//

import { SerendipityComponentsModule } from 'serendipity-components';


//
// Dynamic Forms lib
//

import { DynamicFormsModule } from 'dynamic-forms';


//
// LibRoutingModule: https://angular.io/guide/router#routing-module-order
//

// import { LibRoutingModule } from './lib-routing.module';
import { LazyLibRoutingModule } from './lazy-lib-routing.module';
import { PlanetComponent } from './components/planet/planet.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { AccountsWizardComponent } from './components/accounts-wizard/accounts-wizard.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactsWizardComponent } from './components/contacts-wizard/contacts-wizard.component';



@NgModule({
  imports: [
    AngularMaterialModule,
    CommonModule, 
    // DragDropModule,
    FlexLayoutModule,
   
    ReactiveFormsModule,
    TranslateModule.forChild(),
    UtilsModule,
    SerendipityComponentsModule,
    DynamicFormsModule,

    // https://angular.io/guide/router#routing-module-order
    // LibRoutingModule
    LazyLibRoutingModule
  ],
  declarations: [
    DocumentsComponent,
    PlanetComponent,
    AccountsComponent,
    AccountsWizardComponent,
    ContactsComponent,
    ContactsWizardComponent,
  

  ],
  entryComponents: [
    DocumentsComponent
  ]
})
export class LogisticModule {

  constructor(private injector: Injector,
              private logger: LoggerService) {

    this.logger.info('Logistic Module initialised');

    StaticInjectorService.setInjector(injector);
  }

}

