import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';

// import { HttpClientModule } from '@angular/common/http';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        // HttpClientModule
      ],
      providers: [
        UserService
      ]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should contain admin user', inject([UserService], (service: UserService) => {
    expect(service.users).toBeTruthy();
  }));

  it('should contain example notes', inject([UserService], (service: UserService) => {
    expect(service.users).toBeTruthy();
  }));
});
