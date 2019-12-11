import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { DynamicFormControlCustomEvent, DynamicFormControlModel } from '../../models/dynamic-form-control.model';

import { LoggerService } from 'utils';

@Component({
  selector: 'dynamic-checkbox',
  template: `
    
    <div 
    [className]="model.gridItemClass"
    [formGroup]="formGroup">

      <br/>

      <span *ngIf="model.prefixIconName" matPrefix>
        <mat-icon matPrefix> {{ model.prefixIconName }} </mat-icon>
      </span>
      
      <mat-checkbox
         [required]="model.required"
         [formControlName]="model.id"
         [checked]="model.checked"         
            >{{ model.label }}</mat-checkbox>

      <span *ngIf="model.suffixIconName" matSuffix>
        <mat-icon matSuffix class="crm-suffix-icon" (click)="iconSuffixClickHandler()"> {{ model.suffixIconName }} </mat-icon>
      </span>

      <ng-container *ngFor="let validator of model.validators;" ngProjectAs="mat-error">
        <mat-error *ngIf="formGroup.controls[model.id].hasError(validator.propertyName)"> {{ validator.message }} </mat-error>
      </ng-container>

    </div>  
    
  `,
  styles: []
})
export class DynamicCheckBoxComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() model: DynamicFormControlModel;

  @Output() customEvent = new EventEmitter<DynamicFormControlCustomEvent>();

  @HostBinding('class') elementClass;

  constructor(private logger: LoggerService) {

  }

  public ngOnInit() {

    // this.logger.info('DynamicInputComponent: ngOnInit()');
    this.elementClass = this.model.gridItemClass;
  }

  public iconSuffixClickHandler() {

    this.logger.info('DynamicInputComponent: emit customEvent');
    this.customEvent.emit({ type: 'click', id: this.model.id, directive: 'matSuffix', name: this.model.suffixIconName });
  }

}
