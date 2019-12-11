import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicFormsConfig } from './models/models';
import { DynamicFormsConfigService } from './services/config.service';

import { DynamicControlDirective } from './angular-material/directives/dynamic-control/dynamic-control.directive';
import { DynamicFormComponent } from './angular-material/containers/dynamic-form/dynamic-form.component';

import { DynamicDatepickerComponent } from './angular-material/components/dynamic-datepicker/dynamic-datepicker.component';
import { DynamicImageComponent } from './angular-material/components/dynamic-image/dynamic-image.component';
import { DynamicInputComponent } from './angular-material/components/dynamic-input/dynamic-input.component';
import { DynamicCheckBoxComponent } from './angular-material/components/dynamic-checkbox/dynamic-checkbox.component';
import { DynamicSelectComponent } from './angular-material/components/dynamic-select/dynamic-select.component';
//
// Utils lib
//

import { UtilsModule, LoggerService } from 'utils';
import { AngularMaterialModule } from 'utils';


//https://www.npmjs.com/package/ngx-material-file-input 

const components: any[] = [
  DynamicDatepickerComponent,
  DynamicImageComponent,
  DynamicInputComponent,
  DynamicCheckBoxComponent,
  DynamicSelectComponent 
];

@NgModule({
  imports: [
    AngularMaterialModule,
    CommonModule,
    ReactiveFormsModule,
    UtilsModule
  ],
  declarations: [
    DynamicControlDirective,
    DynamicFormComponent,
    ...components
  ],
  exports: [
    DynamicFormComponent
  ],
  entryComponents: [ ...components ]
})
export class DynamicFormsModule {

  constructor(private logger: LoggerService) {

    this.logger.info('Dynamic Forms Module initialised');
  }

  static forRoot(config: DynamicFormsConfig): ModuleWithProviders {

    return {
      ngModule: DynamicFormsModule,
      providers: [
        { provide: DynamicFormsConfigService, useValue: config }
      ]
    };

  }

}

// import { TranslateModule } from '@ngx-translate/core';
// TranslateModule.forChild()
