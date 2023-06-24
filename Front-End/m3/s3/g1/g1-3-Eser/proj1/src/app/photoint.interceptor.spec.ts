import { TestBed } from '@angular/core/testing';

import { PhotointInterceptor } from './photoint.interceptor';

describe('PhotointInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      PhotointInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: PhotointInterceptor = TestBed.inject(PhotointInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
