import { Component, OnInit } from '@angular/core';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-todo-table-comp',
  templateUrl: './todo-table-comp.component.html',
  styleUrls: ['./todo-table-comp.component.css']
})
export class TodoTableCompComponent implements OnInit {
  public temp:any = []
  constructor(public todoInfo: ServService) { }

  ngOnInit(): void {
    this.temp = this.todoInfo.getTodo();
  }

}
