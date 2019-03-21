import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningProfilePage } from './learning-profile.page';

describe('LearningProfilePage', () => {
  let component: LearningProfilePage;
  let fixture: ComponentFixture<LearningProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
