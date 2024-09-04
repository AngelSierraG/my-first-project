import { TestBed } from '@angular/core/testing';

import { FakestoreServiceService } from './fakestore-service.service';

describe('FakestoreServiceService', () => {
  let service: FakestoreServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakestoreServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
