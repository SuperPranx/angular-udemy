import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveDataButtonComponent } from './responsive-data-button.component';

describe('ResponsiveDataButtonComponent', () => {
  let component: ResponsiveDataButtonComponent;
  let fixture: ComponentFixture<ResponsiveDataButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiveDataButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveDataButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
