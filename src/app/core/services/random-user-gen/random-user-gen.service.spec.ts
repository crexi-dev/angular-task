import { TestBed } from '@angular/core/testing';

import { RandomUserGenService } from './random-user-gen.service';

describe('RandomUserGenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomUserGenService = TestBed.get(RandomUserGenService);
    expect(service).toBeTruthy();
  });
});
