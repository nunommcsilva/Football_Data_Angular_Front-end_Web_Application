import { TestBed } from '@angular/core/testing';

import { EquipaService } from './equipa.service';

describe('EquipaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EquipaService = TestBed.get(EquipaService);
    expect(service).toBeTruthy();
  });
});
