import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter()
  constructor(private todoService:TodoService) {}
  ngOnInit() { }

  toggle(target:Todo){
    target.completed = !target.completed
    this.todoService.toggleTodo(target).subscribe(t => console.log(t))
  }

  delete(target:Todo){
    this.deleteTodo.emit(target)
  }

  setClasses() {
    return {
      'isComplete': this.todo.completed
    }
  }
}
