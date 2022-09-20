import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DepositService {
  ROOT_URL: String = 'http://localhost:8089';
  constructor(private http: HttpClient) { }
  insertEntry(account: string, amount: number) {
    var body = {
      account: account,
      amount: amount,
    };
    console.log(body);
    return this.http.post(this.ROOT_URL + '/account/deposit', body);
  }
}
