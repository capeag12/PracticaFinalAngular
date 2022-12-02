import { TestBed } from '@angular/core/testing';

import { ComprobarLoginGuard } from './comprobar-login.guard';

describe('ComprobarLoginGuard', () => {
  let guard: ComprobarLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ComprobarLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
