import { TestBed } from '@angular/core/testing';

import { ListproyecGruposService } from './listproyec-grupos.service';

describe('ListproyecGruposService', () => {
  let service: ListproyecGruposService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListproyecGruposService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
