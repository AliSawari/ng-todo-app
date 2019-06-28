import { Component, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title: string = ""
  @Output() emitNew: EventEmitter<any> = new EventEmitter()
  constructor() { }
  ngOnInit() { }

  newTodo() {
    let newTodo = {
      title: this.title,
      completed: false
    }
    if (this.title.length > 2) {
      this.emitNew.emit(newTodo)
    } else alert("should be more than 2 characters")
  }

}
