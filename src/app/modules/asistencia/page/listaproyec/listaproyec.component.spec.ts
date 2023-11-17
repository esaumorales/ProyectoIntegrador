import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaproyecComponent } from './listaproyec.component';

describe('ListaproyecComponent', () => {
  let component: ListaproyecComponent;
  let fixture: ComponentFixture<ListaproyecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaproyecComponent]
    });
    fixture = TestBed.createComponent(ListaproyecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
