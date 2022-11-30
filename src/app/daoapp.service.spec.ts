import { TestBed } from '@angular/core/testing';

import { DAOAppService } from './daoapp.service';

describe('DAOAppService', () => {
  let service: DAOAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DAOAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
