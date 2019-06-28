import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Todo } from '../models/Todo'
import { Observable } from 'rxjs'

const options = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) { }
  private source = "https://jsonplaceholder.typicode.com/todos"
  private limit(lim: number) {
    return `${this.source}?_limit=${lim}`
  }

  getTodos(howMany:number): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.limit(howMany))
  }

  toggleTodo(todo: Todo): Observable<any> {
    let url = `${this.source}/${todo.id}`
    return this.http.put(url, todo, options)
  }

  addTodo(todo:Todo):Observable<Todo>{
    return this.http.post<Todo>(this.source,todo, options)
  }
}