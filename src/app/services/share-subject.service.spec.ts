import { TestBed } from '@angular/core/testing';

import { ShareSubjectService } from './share-subject.service';

describe('ShareSubjectService', () => {
  let service: ShareSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
