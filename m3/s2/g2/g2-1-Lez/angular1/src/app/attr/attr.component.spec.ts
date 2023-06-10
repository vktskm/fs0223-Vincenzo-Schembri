import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrComponent } from './attr.component';

describe('AttrComponent', () => {
  let component: AttrComponent;
  let fixture: ComponentFixture<AttrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttrComponent]
    });
    fixture = TestBed.createComponent(AttrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
