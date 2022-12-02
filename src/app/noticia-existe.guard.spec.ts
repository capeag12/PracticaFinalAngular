import { TestBed } from '@angular/core/testing';

import { NoticiaExisteGuard } from './noticia-existe.guard';

describe('NoticiaExisteGuard', () => {
  let guard: NoticiaExisteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoticiaExisteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
