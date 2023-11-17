import { TestBed } from '@angular/core/testing';

import { AprobarProyectoService } from './aprobar-proyecto.service';

describe('AprobarProyectoService', () => {
  let service: AprobarProyectoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AprobarProyectoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
