import { Component, OnDestroy, OnInit } from '@angular/core';
import { DynamicFormControlCustomEvent, DynamicFormModel, DynamicFormService} from 'dynamic-forms';
import { FormGroup } from '@angular/forms';
import { LoggerService } from 'utils';
import { ACCOUNT_GENERAL_INFORMATION_GROUP} from '../../models/form-ids';
import { NullTemplateVisitor } from '@angular/compiler';
import { ACCOUNTS } from '../../models/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts-wizard',
  templateUrl: './accounts-wizard.component.html',
  styleUrls: ['./accounts-wizard.component.scss']
})
export class AccountsWizardComponent implements OnInit , OnDestroy  {

  public generalInformationModel: DynamicFormModel;
  public generalInformationGroup: FormGroup;
  

  constructor(private router: Router,
     private logger: LoggerService,
     private dynamicFormService: DynamicFormService) { }

  ngOnInit() {
    this.logger.info('AccountWizardComponent: ngOnInit()');
    this.createWizardSteps();
  }

  async createWizardSteps() {

    this.logger.info('AccountWizardComponent: createWizardSteps()');    

    this.generalInformationModel = await this.dynamicFormService.getFormMetadata(ACCOUNT_GENERAL_INFORMATION_GROUP);
    this.generalInformationGroup = this.dynamicFormService.createGroup(this.generalInformationModel);
 

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

    this.router.navigate([ACCOUNTS]);
  }
  

}
