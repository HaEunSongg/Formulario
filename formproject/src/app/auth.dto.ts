export class AuthDTO {
  access_token: string;
  email: string;
  password: string;
  rol: string;

  constructor(
    access_token: string,
    email: string,
    password: string,
    rol: string
  ) {
    this.access_token = access_token;
    this.email = email;
    this.password = password;
    this.rol = rol;
  }
}
