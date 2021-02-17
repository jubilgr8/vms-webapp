import { ApiService, User, UserResponse } from 'libs/api/src';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login, LoginUserRequest, NewUserRequest, NewUser } from './auth.interfaces';

@Injectable()
export class AuthService {
  constructor(private apiService: ApiService) {}

  user(): Observable<UserResponse> {
    return this.apiService.get<UserResponse>('User/GetUsers');
  }

  login(credentials: Login): Observable<User> {
    return this.apiService.post<User, Login>('User/LoginRequest', credentials);
  }

  register(credentials: NewUser): Observable<UserResponse> {
    return this.apiService.post<UserResponse, NewUserRequest>('users', { user: credentials });
  }
}
