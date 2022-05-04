import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TaskListService {
  constructor(private http: HttpClient) {}

  getTasksList() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
