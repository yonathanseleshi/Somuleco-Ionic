import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningFeedPage } from './learning-feed.page';

describe('LearningFeedPage', () => {
  let component: LearningFeedPage;
  let fixture: ComponentFixture<LearningFeedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningFeedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningFeedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
