export interface AuthUser {
  id: string
}
export interface Auth {
  login: (token: string) => void
  logout: () => void
  isLoggedIn: boolean
}
