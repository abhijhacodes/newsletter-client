import jwtDecode from "jwt-decode";

export const isTokenExpired = (accessToken: string) => {
  const token: any = jwtDecode(accessToken);
  const tokenExpiration = token.exp * 1000; // converting to milliseconds
  return tokenExpiration < Date.now();
};
