import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisRolesComponent } from './regis-roles.component';

describe('RegisRolesComponent', () => {
  let component: RegisRolesComponent;
  let fixture: ComponentFixture<RegisRolesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisRolesComponent]
    });
    fixture = TestBed.createComponent(RegisRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
