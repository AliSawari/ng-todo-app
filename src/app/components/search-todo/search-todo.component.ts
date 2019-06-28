import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-todo',
  templateUrl: './search-todo.component.html',
  styleUrls: ['./search-todo.component.css']
})
export class SearchTodoComponent implements OnInit {
  searchText: string = ""
  @Output() searching: EventEmitter<string> = new EventEmitter()
  constructor() { }
  ngOnInit() { }

  onChange() {
    this.searching.emit(this.searchText)
  }
}
