import { ApiService, User, UserResponse } from 'libs/api/src';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Login,
  LoginUserRequest,
  NewUserRequest,
  NewUser,
} from './auth.interfaces';

export interface Token {
  authToken: string;
}

@Injectable()
export class AuthService {
  constructor(private apiService: ApiService) {}

  user(authToken: string): Observable<boolean> {
    return this.apiService.post<boolean, Token>('Base/ValidateToken', {
      authToken: authToken,
    });
  }

  login(credentials: Login): Observable<User> {
    return this.apiService.post<User, Login>('User_API/api/User/LoginRequest', credentials);
  }

  register(credentials: NewUser): Observable<UserResponse> {
    return this.apiService.post<UserResponse, NewUserRequest>('users', {
      user: credentials,
    });
  }
}
