import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadEjecuComponent } from './actividad-ejecu.component';

describe('ActividadEjecuComponent', () => {
  let component: ActividadEjecuComponent;
  let fixture: ComponentFixture<ActividadEjecuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActividadEjecuComponent]
    });
    fixture = TestBed.createComponent(ActividadEjecuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
