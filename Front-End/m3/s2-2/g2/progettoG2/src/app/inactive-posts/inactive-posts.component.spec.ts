import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactivePostsComponent } from './inactive-posts.component';

describe('InactivePostsComponent', () => {
  let component: InactivePostsComponent;
  let fixture: ComponentFixture<InactivePostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InactivePostsComponent]
    });
    fixture = TestBed.createComponent(InactivePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
