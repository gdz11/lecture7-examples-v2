import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  getUrl(userId: number){ return `https://jsonplaceholder.typicode.com/users/${userId}/todos` }

  public getUserTodos(userId: number){
    let url = this.getUrl(userId);

    return this.httpClient.get<Todo[]>(url);
  }

  constructor(private httpClient: HttpClient) { }
}
