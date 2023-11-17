import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinformefinalComponent } from './addinformefinal.component';

describe('AddinformefinalComponent', () => {
  let component: AddinformefinalComponent;
  let fixture: ComponentFixture<AddinformefinalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddinformefinalComponent]
    });
    fixture = TestBed.createComponent(AddinformefinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
