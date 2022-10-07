import { Component, OnInit } from '@angular/core';
import { Todo } from "src/app/Todo"
import { Input ,Output} from "@angular/core"
import *as EventEmitter from 'node:events'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() todoDelete:EventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo:Todo){

    console.log("on click has been triggerd")
  }

}
