import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivenComponent } from './driven.component';

describe('DrivenComponent', () => {
  let component: DrivenComponent;
  let fixture: ComponentFixture<DrivenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrivenComponent]
    });
    fixture = TestBed.createComponent(DrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
