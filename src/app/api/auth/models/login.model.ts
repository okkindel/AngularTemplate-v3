export interface LoginRequest {
  password?: string;
  email?: string;
}

export interface LoginResponse {
  token: string;
}
