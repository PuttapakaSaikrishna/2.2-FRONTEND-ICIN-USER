import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  ROOT_URL: String = 'http://localhost:8089';

  constructor(private http: HttpClient) {}

  loginUser(userName: string, password: string) {
    var body = {
      username: userName,
      password: password,
    };
    return this.http.post(this.ROOT_URL + '/login', body);
  }
}
