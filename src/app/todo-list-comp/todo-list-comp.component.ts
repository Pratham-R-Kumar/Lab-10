import { Component, OnInit } from '@angular/core';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-todo-list-comp',
  templateUrl: './todo-list-comp.component.html',
  styleUrls: ['./todo-list-comp.component.css']
})
export class TodoListCompComponent implements OnInit {
  public temp:any = [];
  constructor(public todoInfo: ServService) { }

  ngOnInit(): void {
    this.temp = this.todoInfo.getTodo()
  }

}
