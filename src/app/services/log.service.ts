import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {  Observable } from 'rxjs/Observable.js';
import  { of } from 'rxjs/observable/of';
import { Log } from '../models/Log.js';


@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({id: null, text: null, date: null});
  selectedLog = this.logSource.asObservable();


  constructor() {
    this.logs = [
      {id: '1', text: 'Generated components', date: new Date('12/26/2017 12:54:23')},
      {id: '2', text: 'Added Boostrap', date: new Date('12/27/2017 09:54:23')},
      {id: '3', text: 'Added logs components', date: new Date('12/27/2017 12:00:23')}
    ]
   }

   getLogs(): Observable<Log[]> {
     return of(this.logs);
   }
  
   setFormLog(log: Log) {
      this.logSource.next(log);
   }
}
