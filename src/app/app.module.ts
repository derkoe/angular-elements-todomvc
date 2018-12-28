import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [TodoListComponent],
  imports: [BrowserModule],
  entryComponents: [TodoListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor(private injector: Injector) {
    const todoList = createCustomElement(TodoListComponent, { injector });
    customElements.define('todo-list', todoList);
  }
  ngDoBootstrap() {}
}
