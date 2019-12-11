import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsWizardComponent } from './contacts-wizard.component';

describe('ContactsWizardComponent', () => {
  let component: ContactsWizardComponent;
  let fixture: ComponentFixture<ContactsWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
