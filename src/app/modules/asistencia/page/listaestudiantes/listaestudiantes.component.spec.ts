import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaestudiantesComponent } from './listaestudiantes.component';

describe('ListaestudiantesComponent', () => {
  let component: ListaestudiantesComponent;
  let fixture: ComponentFixture<ListaestudiantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaestudiantesComponent]
    });
    fixture = TestBed.createComponent(ListaestudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
