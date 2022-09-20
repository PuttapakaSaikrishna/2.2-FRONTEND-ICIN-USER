import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  ROOT_URL: String = 'http://localhost:8089';

  constructor(private http: HttpClient) {}

  insertEntry(
    username: string,
    saccount: string,
    ifscNo: string,
    raccount: string,
    amount: number
  ) {
    var body = {
      username: username,
      saccount: saccount,
      ifsc: ifscNo,
      raccount: raccount,
      amount: amount,
    };
    console.log(body);
    return this.http.post(this.ROOT_URL + '/account/transfer', body);
  }
}
