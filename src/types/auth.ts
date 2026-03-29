export interface User {
  id: string;
  fullName: string;
  email: string;
  password?: string; // Optional for security (though this is a demo)
  createdAt: string;
}

export type AuthStatus = 'loading' | 'authenticated' | 'unauthenticated';

export interface AuthState {
  user: User | null;
  status: AuthStatus;
}
