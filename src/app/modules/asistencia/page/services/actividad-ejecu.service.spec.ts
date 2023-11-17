import { TestBed } from '@angular/core/testing';

import { ActividadEjecuService } from './actividad-ejecu.service';

describe('ListproyecService', () => {
  let service: ActividadEjecuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActividadEjecuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
