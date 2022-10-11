import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './my-components/todos/todos.component';
import { TodoItemComponent } from './my-components/todo-item/todo-item.component';
import { AddTodoComponent } from './my-components/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './my-components/about/about.component';
import { ServicesComponent } from './my-components/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
