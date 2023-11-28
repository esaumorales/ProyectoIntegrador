import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidacionEvidenciaComponent } from './validacion-evidencia.component';

describe('ValidacionEvidenciaComponent', () => {
  let component: ValidacionEvidenciaComponent;
  let fixture: ComponentFixture<ValidacionEvidenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidacionEvidenciaComponent]
    });
    fixture = TestBed.createComponent(ValidacionEvidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
