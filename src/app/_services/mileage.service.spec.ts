/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MileageService } from './mileage.service';

describe('Service: Mileage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MileageService]
    });
  });

  it('should ...', inject([MileageService], (service: MileageService) => {
    expect(service).toBeTruthy();
  }));
});
