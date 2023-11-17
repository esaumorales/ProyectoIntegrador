import { TestBed } from '@angular/core/testing';
import { RegisRolesService } from './regis-roles.service';

describe('RegisRolesService', () => {
  let service: RegisRolesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisRolesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
