import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformefinalComponent } from './informefinal.component';

describe('InformefinalComponent', () => {
  let component: InformefinalComponent;
  let fixture: ComponentFixture<InformefinalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformefinalComponent]
    });
    fixture = TestBed.createComponent(InformefinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
