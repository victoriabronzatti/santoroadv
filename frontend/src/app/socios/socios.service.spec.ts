/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SociosService } from './socios.service';

describe('Service: Socios', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SociosService]
    });
  });

  it('should ...', inject([SociosService], (service: SociosService) => {
    expect(service).toBeTruthy();
  }));
});
