import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componet3Component } from './componet3.component';

describe('Componet3Component', () => {
  let component: Componet3Component;
  let fixture: ComponentFixture<Componet3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Componet3Component]
    });
    fixture = TestBed.createComponent(Componet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
