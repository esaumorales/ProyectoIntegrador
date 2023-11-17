import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadPlaniComponent } from './actividad-plani.component';

describe('ActividadPlaniComponent', () => {
  let component: ActividadPlaniComponent;
  let fixture: ComponentFixture<ActividadPlaniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActividadPlaniComponent]
    });
    fixture = TestBed.createComponent(ActividadPlaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
