import { TestBed } from '@angular/core/testing';

import { TextBibleService } from './text-bible.service';

describe('TextBibleService', () => {
  let service: TextBibleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextBibleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
