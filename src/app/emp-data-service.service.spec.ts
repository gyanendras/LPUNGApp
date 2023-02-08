import { TestBed } from '@angular/core/testing';

import { EmpDataService } from './emp-data-service.service';

describe('EmpDataServiceService', () => {
  let service: EmpDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
