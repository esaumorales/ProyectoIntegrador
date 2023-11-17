import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIntervencionComponent } from './add-intervencion.component';

describe('AddIntervencionComponent', () => {
  let component: AddIntervencionComponent;
  let fixture: ComponentFixture<AddIntervencionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddIntervencionComponent]
    });
    fixture = TestBed.createComponent(AddIntervencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
