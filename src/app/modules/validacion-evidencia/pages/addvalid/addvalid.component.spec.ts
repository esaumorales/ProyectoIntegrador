import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvalidComponent } from './addvalid.component';

describe('AddvalidComponent', () => {
  let component: AddvalidComponent;
  let fixture: ComponentFixture<AddvalidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddvalidComponent]
    });
    fixture = TestBed.createComponent(AddvalidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
