import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SpaceXComponent } from './space-x/space-x.component';
import { TodoListCompComponent } from './todo-list-comp/todo-list-comp.component';
import { TodoTableCompComponent } from './todo-table-comp/todo-table-comp.component';

const routes: Routes = [{path:'todo-list',component:TodoListCompComponent},{path:'todo-table', component:TodoTableCompComponent},{path:'space-x',component:SpaceXComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
