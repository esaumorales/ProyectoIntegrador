import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIntervencionComponent } from './edit-intervencion.component';

describe('EditIntervencionComponent', () => {
  let component: EditIntervencionComponent;
  let fixture: ComponentFixture<EditIntervencionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditIntervencionComponent]
    });
    fixture = TestBed.createComponent(EditIntervencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
