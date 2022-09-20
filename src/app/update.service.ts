import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UpdateService {
  ROOT_URL: String = 'http://localhost:8089';

  constructor(private http: HttpClient) {}

  update(
    username: string,
    phone: number,
    email: string,
    address: string,
    prevpassword: string,
    newpassword: string
  ) {
    var body = {
      username: username,
      phone: phone,
      email: email,
      address: address,
      password: prevpassword,
      newpassword: newpassword,
    };
    console.log(body);
    return this.http.put(this.ROOT_URL + '/profile/update', body);
  }
}
