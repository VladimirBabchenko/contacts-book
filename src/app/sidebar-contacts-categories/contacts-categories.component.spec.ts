import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsCategoriesComponent } from './contacts-categories.component';

describe('ContactsCategoriesComponent', () => {
  let component: ContactsCategoriesComponent;
  let fixture: ComponentFixture<ContactsCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
