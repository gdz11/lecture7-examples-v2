import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://jsonplaceholder.typicode.com/users';

  public getUsers(): Observable<User[]>
  {
    return this.httpClient.get<User[]>(this.url);
  }

  public getUsersPaginated()
  {

  }

  constructor(private httpClient: HttpClient) { }
}
