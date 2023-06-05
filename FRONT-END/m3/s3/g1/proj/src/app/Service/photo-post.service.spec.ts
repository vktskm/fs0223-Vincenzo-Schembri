import { TestBed } from '@angular/core/testing';

import { PhotoPostService } from './photo-post.service';

describe('PhotoPostService', () => {
  let service: PhotoPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
