import { Injectable } from "@angular/core";
import {  HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse,HttpClient  } from '@angular/common/http';

import { Todo } from '../todo'
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';


@Injectable({
    providedIn: 'root'
})
export class TodoService implements HttpInterceptor {
    todoapiUrl:string='http://localhost:3000/todo';
    private handleError: HandleError;

    constructor(private http: HttpClient,  httpErrorHandler: HttpErrorHandler,messageService: MessageService) {
        this.handleError = httpErrorHandler.createHandleError('TodoService');
     }
    intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): Observable<import("@angular/common/http").HttpEvent<any>> {
        throw new Error("Method not implemented.");
    }
   
    fetchData(): Observable<Todo[]>{
        
        return this.http.get<Todo[]>(this.todoapiUrl)
        .pipe(
            catchError(this.handleError('fetchData', []))
        )
        
    }


    }

