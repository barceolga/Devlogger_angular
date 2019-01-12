import { Component, OnInit } from '@angular/core';
import { Log } from '../../models/Log.js';
import  { LogService } from '../../services/log.service';

@Component({
  selector: 'app-logform',
  templateUrl: './logform.component.html',
  styleUrls: ['./logform.component.scss']
})
export class LogformComponent implements OnInit {
  id: string;
  text: string;
  date: any;

  constructor(private logService: LogService) { }

  ngOnInit() {
    //Subscribe to the selectedLog observable
    this.logService.selectedLog.subscribe(log => {
      if(log.id !== null) {
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
      }
    })
  }

}
