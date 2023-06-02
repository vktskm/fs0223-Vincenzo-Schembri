import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletatiComponent } from './completati.component';

describe('CompletatiComponent', () => {
  let component: CompletatiComponent;
  let fixture: ComponentFixture<CompletatiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompletatiComponent]
    });
    fixture = TestBed.createComponent(CompletatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
