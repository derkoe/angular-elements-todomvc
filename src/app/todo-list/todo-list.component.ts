import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Todo, TodoStore } from './todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class TodoListComponent {
  todoStore = new TodoStore();

  stopEditing(todo: Todo, editedTitle: string) {
    todo.title = editedTitle;
    todo.editing = false;
  }

  cancelEditingTodo(todo: Todo) {
    todo.editing = false;
  }

  updateEditingTodo(todo: Todo, editedTitle: string) {
    editedTitle = editedTitle.trim();
    todo.editing = false;

    if (editedTitle.length === 0) {
      return this.todoStore.remove(todo);
    }

    todo.title = editedTitle;
  }

  editTodo(todo: Todo) {
    todo.editing = true;
  }

  removeCompleted() {
    this.todoStore.removeCompleted();
  }

  toggleCompletion(todo: Todo) {
    this.todoStore.toggleCompletion(todo);
  }

  remove(todo: Todo) {
    this.todoStore.remove(todo);
  }

  addTodo(newTodoText) {
    if (newTodoText.trim().length) {
      this.todoStore.add(newTodoText);
    }
  }
}
