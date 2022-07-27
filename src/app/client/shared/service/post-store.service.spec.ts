import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { Post } from '../models/post';

import { PostStoreService } from './post-store.service';

describe('PostStoreService', () => {
  let service: PostStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
