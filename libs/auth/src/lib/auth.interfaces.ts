export interface NewUserRequest {
  user: NewUser;
}

export interface NewUser {
  username: string;
  email: string;
  password: string;
}

export interface LoginUserRequest {
  user: Login;
}

export interface Login {
  username: string;
  password: string;
}
