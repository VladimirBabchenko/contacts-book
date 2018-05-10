import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentHeaderMenuComponent } from './content-header-menu.component';

describe('ContentHeaderMenuComponent', () => {
  let component: ContentHeaderMenuComponent;
  let fixture: ComponentFixture<ContentHeaderMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentHeaderMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentHeaderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
