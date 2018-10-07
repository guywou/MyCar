/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MileageinfoService } from './mileageinfo.service';

describe('Service: Mileageinfo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MileageinfoService]
    });
  });

  it('should ...', inject([MileageinfoService], (service: MileageinfoService) => {
    expect(service).toBeTruthy();
  }));
});
