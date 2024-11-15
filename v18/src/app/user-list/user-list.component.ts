import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';
import { Todo } from '../shared/models/todo';
import { UserService } from '../shared/services/user.service';
import { TodoService } from '../shared/services/todo.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgClass],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  users: User[];
  todos: Todo[];
  isUserLoading: boolean;
  isUserLoadingFailed: boolean;
  selectedUserId?: number = undefined;


  constructor(private userService: UserService, private todoService: TodoService){
    this.users = [];
    this.todos = [];
    this.isUserLoading = false;
    this.isUserLoadingFailed = false;
  }

  loadUsers(){
    this.isUserLoading = true;
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.isUserLoading = false;
        this.isUserLoadingFailed = false;
      },
      error: (error) => {
        this.isUserLoading = false;
        this.isUserLoadingFailed = true;
        alert(error.message)
      }
    });
  }

  loadTodos(userId: number){
    this.todoService.getUserTodos(userId).subscribe(d => {
      this.todos = d;
    })
  }

  onSelectUser(userId: number){
    this.selectedUserId = userId;
    this.loadTodos(userId);
  }

  onReload(){
    this.loadUsers();
  }

  ngOnInit(): void {
    this.loadUsers();
  }
}
