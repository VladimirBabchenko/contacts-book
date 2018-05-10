import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormAvatarComponent } from './contact-form-avatar.component';

describe('ContactFormAvatarComponent', () => {
  let component: ContactFormAvatarComponent;
  let fixture: ComponentFixture<ContactFormAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFormAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
