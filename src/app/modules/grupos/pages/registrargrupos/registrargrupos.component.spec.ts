import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrargruposComponent } from './registrargrupos.component';

describe('RegistrargruposComponent', () => {
  let component: RegistrargruposComponent;
  let fixture: ComponentFixture<RegistrargruposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrargruposComponent]
    });
    fixture = TestBed.createComponent(RegistrargruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
