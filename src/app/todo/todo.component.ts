import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos = [{ title: 'New Todo App', finished: false }];
  todosForm = this.formBuilder.group({ title: '', finished: false });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    this.todos.push(this.todosForm.value);
    this.todosForm.reset();
  }

  markCompleted(todo) {
    this.todos = this.todos.map((t) =>
      t === todo ? { ...t, finished: !t.finished } : t
    );
  }
}
