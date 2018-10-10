/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MileageEditComponent } from './mileage-edit.component';

describe('MileageEditComponent', () => {
  let component: MileageEditComponent;
  let fixture: ComponentFixture<MileageEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MileageEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MileageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
