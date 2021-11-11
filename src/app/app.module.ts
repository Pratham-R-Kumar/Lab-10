import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListCompComponent } from './todo-list-comp/todo-list-comp.component';
import { TodoTableCompComponent } from './todo-table-comp/todo-table-comp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'
import { ServService } from './serv.service';
import {HttpClientModule} from '@angular/common/http';
import { SpaceXComponent } from './space-x/space-x.component'


@NgModule({
  declarations: [
    AppComponent,
    TodoListCompComponent,
    TodoTableCompComponent,
    SpaceXComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [ServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
