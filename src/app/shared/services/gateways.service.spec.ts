import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { GatewaysService } from './gateways.service';

describe('GatewaysService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
  }));

  it('should be created', () => {
    const service: GatewaysService = TestBed.get(GatewaysService);
    expect(service).toBeTruthy();
  });
});
