import { Component, OnInit } from '@angular/core';
import {Todo} from"../../Todo"
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[]
  constructor() {
    this.todos=[
      {
        sno:1,
        title:"This is title1",
        desc:"descreptions1",
        active:true
      },
      {
        sno:2,
        title:"This is title2",
        desc:"descreptions2",
        active:true
      },
      {
        sno:3,
        title:"This is title3",
        desc:"descreptions3",
        active:true
      },
      {
        sno:4,
        title:"This is title4",
        desc:"descreptions4",
        active:true
      },

    ]
   }

  ngOnInit(): void {
  }

}
