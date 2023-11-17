import { TestBed } from '@angular/core/testing';
import { TipProyecService } from './tip-proyec.service';

describe('TipProyecService', () => {
  let service: TipProyecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipProyecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
