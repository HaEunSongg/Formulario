import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthDTO } from "../auth.dto";
@Injectable({
  providedIn: "root",
})
export class UserService {
  private controller!: string | null;

  constructor(private http: HttpClient) {}

  login(user: AuthDTO): Observable<AuthDTO> {
    this.controller = "loginUser";
    return this.http.post<AuthDTO>("example.com/comments", user);
    //return user//this.http.post<AuthUser>(this.urlApiBack + this.controller, user);
  }
}
