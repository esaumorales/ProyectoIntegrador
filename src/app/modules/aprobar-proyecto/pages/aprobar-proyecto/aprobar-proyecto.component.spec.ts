import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobarProyectoComponent } from './aprobar-proyecto.component';

describe('AprobarProyectoComponent', () => {
  let component: AprobarProyectoComponent;
  let fixture: ComponentFixture<AprobarProyectoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AprobarProyectoComponent]
    });
    fixture = TestBed.createComponent(AprobarProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
