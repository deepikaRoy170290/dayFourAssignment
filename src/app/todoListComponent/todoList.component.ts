import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todoList.service';

import { Todo } from '../todo'


@Component({
  selector: 'app-todo-list',
  templateUrl: './todoList.component.html'
})
export class TodoListComponent implements OnInit {

    todos:Todo[];
    loading:boolean=false;
    
    constructor(private todoService: TodoService){}

    ngOnInit(){
        this.fetchData();
    }
    fetchData(): void {
        this.todoService.fetchData()
          .subscribe(todos => (this.todos = todos));
      }

}
