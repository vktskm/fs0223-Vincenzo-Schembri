import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnactiveComponent } from './unactive.component';

describe('UnactiveComponent', () => {
  let component: UnactiveComponent;
  let fixture: ComponentFixture<UnactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnactiveComponent]
    });
    fixture = TestBed.createComponent(UnactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
