import { TestBed } from '@angular/core/testing';

import { PrandService } from './prand.service';

describe('PrandService', () => {
  let service: PrandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
