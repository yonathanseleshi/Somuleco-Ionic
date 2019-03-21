import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLibraryPage } from './my-library.page';

describe('MyLibraryPage', () => {
  let component: MyLibraryPage;
  let fixture: ComponentFixture<MyLibraryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLibraryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLibraryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
