import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarComponent } from './comentar.component';

describe('ComentarComponent', () => {
  let component: ComentarComponent;
  let fixture: ComponentFixture<ComentarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComentarComponent]
    });
    fixture = TestBed.createComponent(ComentarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
