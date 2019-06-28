import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[]
  viewTodos: Todo[]
  constructor(private todoService: TodoService) { }
  ngOnInit() {
    this.todoService.getTodos(6).subscribe((todos:Todo[]) => {
      this.todos = todos
      this.viewTodos = todos
    })
  }
  delete(target: Todo) {
    this.todos = this.todos.filter(t => t.id !== target.id)
    this.viewTodos = this.todos
  }
  add(target: Todo) {
    target.id = this.todos.length + 1
    this.todos.push(target)
    this.todoService.addTodo(target).subscribe((t: Todo) => console.log(t))
  }
  search(searchText: string) {
    if(searchText.length == 0) this.viewTodos = this.todos
    else this.viewTodos = this.todos.filter(t => t.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
  }
}
