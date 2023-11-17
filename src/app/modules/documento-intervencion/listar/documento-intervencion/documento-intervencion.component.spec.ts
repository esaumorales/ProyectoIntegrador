import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocumentoIntervencionComponent } from './documento-intervencion.component';

describe('DocumentoIntervencionComponent', () => {
  let component: DocumentoIntervencionComponent;
  let fixture: ComponentFixture<DocumentoIntervencionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentoIntervencionComponent]
    });
    fixture = TestBed.createComponent(DocumentoIntervencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
