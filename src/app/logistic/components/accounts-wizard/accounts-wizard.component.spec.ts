import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsWizardComponent } from './accounts-wizard.component';

describe('AccountsWizardComponent', () => {
  let component: AccountsWizardComponent;
  let fixture: ComponentFixture<AccountsWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
