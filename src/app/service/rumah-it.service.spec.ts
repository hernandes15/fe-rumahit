import { TestBed } from '@angular/core/testing';

import { RumahItService } from './rumah-it.service';

describe('RumahItService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RumahItService = TestBed.get(RumahItService);
    expect(service).toBeTruthy();
  });
});
