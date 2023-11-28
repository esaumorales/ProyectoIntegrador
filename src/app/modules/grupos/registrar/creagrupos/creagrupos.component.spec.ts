import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreagruposComponent } from './creagrupos.component';

describe('CreagruposComponent', () => {
  let component: CreagruposComponent;
  let fixture: ComponentFixture<CreagruposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreagruposComponent]
    });
    fixture = TestBed.createComponent(CreagruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
