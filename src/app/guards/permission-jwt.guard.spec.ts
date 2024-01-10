import { TestBed } from '@angular/core/testing';

import { PermissionJWTGuard } from './permission-jwt.guard';

describe('PermissionJWTGuard', () => {
  let guard: PermissionJWTGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermissionJWTGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
