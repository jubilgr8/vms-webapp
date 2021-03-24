import { TestBed } from '@angular/core/testing';

import { Media.Service } from './media.service.service';

describe('Media.ServiceService', () => {
  let service: Media.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Media.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
