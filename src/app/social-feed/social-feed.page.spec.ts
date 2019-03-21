import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialFeedPage } from './social-feed.page';

describe('SocialFeedPage', () => {
  let component: SocialFeedPage;
  let fixture: ComponentFixture<SocialFeedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialFeedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialFeedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
