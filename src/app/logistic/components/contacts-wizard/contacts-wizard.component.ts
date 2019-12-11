import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicFormControlCustomEvent, DynamicFormModel, DynamicFormService} from 'dynamic-forms';
import { LoggerService } from 'utils';
import { FormGroup } from '@angular/forms';
import { CONTACT_GENERAL_INFORMATION_GROUP , CONTACT_ADDRESS_INFORMATION_GROUP } from '../../models/form-ids';
import { CONTACTS } from '../../models/constants';

@Component({
  selector: 'app-contacts-wizard',
  templateUrl: './contacts-wizard.component.html',
  styleUrls: ['./contacts-wizard.component.scss']
})
export class ContactsWizardComponent implements OnInit , OnDestroy{

  public generalInformationModel: DynamicFormModel;
  public generalInformationGroup: FormGroup;

  public addressInformationModel: DynamicFormModel;
  public addressInformationGroup: FormGroup;

  constructor(private router: Router,
    private logger: LoggerService,
    private dynamicFormService: DynamicFormService) { }

    ngOnInit() {
      this.logger.info('ContactWizardComponent: ngOnInit()');
      this.createWizardSteps();
    }
  
    async createWizardSteps() {
  
      this.logger.info('ContactWizardComponent: createWizardSteps()');    
  
      this.generalInformationModel = await this.dynamicFormService.getFormMetadata(CONTACT_GENERAL_INFORMATION_GROUP);
      this.generalInformationGroup = this.dynamicFormService.createGroup(this.generalInformationModel);

      this.addressInformationModel = await this.dynamicFormService.getFormMetadata(CONTACT_ADDRESS_INFORMATION_GROUP);
      this.addressInformationGroup = this.dynamicFormService.createGroup(this.addressInformationModel);
   
  
    }

  public isDirty() {

    // this.logger.info('ContactWizardComponent - isDirty()');

    let dirty = false;


    return dirty;
  }

  public isValid() {

    // this.logger.info('ContactWizardComponent - isValid()');

    let valid = false;


    return valid;
  }

  public ngOnDestroy() {

    this.logger.info('ContactWizardComponent: ngOnDestroy()');
  }

  public onClose() {

    // this.logger.info('AccountComponent: onClose()');

    this.router.navigate([CONTACTS]);
  }

}
