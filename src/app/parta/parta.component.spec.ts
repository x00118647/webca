/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PartaComponent } from './parta.component';

describe('PartaComponent', () => {
  let component: PartaComponent;
  let fixture: ComponentFixture<PartaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
