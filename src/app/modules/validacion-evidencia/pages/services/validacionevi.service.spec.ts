import { TestBed } from '@angular/core/testing';

import { ValidacioneviService } from './validacionevi.service';

describe('ValidacioneviService', () => {
  let service: ValidacioneviService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidacioneviService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
