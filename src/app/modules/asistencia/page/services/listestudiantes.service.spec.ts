import { TestBed } from '@angular/core/testing';

import { ListestudiantesService } from './listestudiantes.service';

describe('ListestudiantesService', () => {
  let service: ListestudiantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListestudiantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
