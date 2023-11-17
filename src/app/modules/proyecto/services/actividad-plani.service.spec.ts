import { TestBed } from '@angular/core/testing';
import { ActividadPlaniService } from './actividad-plani.service';

describe('ActividadPlaniService', () => {
  let service: ActividadPlaniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActividadPlaniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
