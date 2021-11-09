import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServService {
  public list = [
    {"Serial":1,"ToDo":"Study"},
    {"Serial":2,"ToDo":"Project Submission"},
    {"Serial":3,"ToDo":"Workout"},
    {"Serial":4,"ToDo":"Buy Groceries"},
    {"Serial":5,"ToDo":"Maths Assignment"}
  ]

  getTodo(){
    return this.list;
  }
  constructor() { }
}
