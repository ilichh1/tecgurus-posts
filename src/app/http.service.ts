import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = '//jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public get(path: string): Promise<any> {
    return this.httpClient.get(`${BASE_URL}/${path}`).toPromise();
  }

  public post(path: string, body: any): Promise<any> {
    return this.httpClient.get(
      `${BASE_URL}/${path}`,
      body ).toPromise();
  }

}
