import { TestBed } from '@angular/core/testing';

import { FormdetailsService } from './formdetails.service';

describe('FormdetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormdetailsService = TestBed.get(FormdetailsService);
    expect(service).toBeTruthy();
  });
});
