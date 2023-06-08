import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactingComponent } from './reacting.component';

describe('ReactingComponent', () => {
  let component: ReactingComponent;
  let fixture: ComponentFixture<ReactingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactingComponent]
    });
    fixture = TestBed.createComponent(ReactingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
