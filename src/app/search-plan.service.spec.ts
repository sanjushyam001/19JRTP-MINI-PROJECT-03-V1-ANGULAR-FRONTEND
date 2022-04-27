import { TestBed } from '@angular/core/testing';

import { SearchPlanService } from './search-plan.service';

describe('SearchPlanService', () => {
  let service: SearchPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
