import { TestBed } from '@angular/core/testing';

import { InformefinalService } from './informefinal.service';

describe('InformefinalService', () => {
  let service: InformefinalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformefinalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
