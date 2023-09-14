export interface RegisterRequest {
  password?: string;
  token: string;
}

export interface RegisterResponse {
  token: string;
}
