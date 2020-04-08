import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorHandler } from './services/http-error-handler.service';
import { MessageService } from './services/message.service';
import { TodoListComponent } from "./TodoListComponent/todoList.component";
import { MessagesComponent } from './messages/messages.component';
import { LoggingInterceptor } from './interceptors/logging-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HttpErrorHandler,
    MessageService,
    LoggingInterceptor,
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi:true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
