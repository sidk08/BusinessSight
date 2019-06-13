import { Component, OnInit, Input } from '@angular/core';
import { Server } from '../shared/serverStatus';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrls: ['./server-status.component.scss']
})
export class ServerStatusComponent implements OnInit {

  constructor() { }

  color:string;
  buttonText:string;
  @Input() serverInput;
  
  
  ngOnInit() {
    this.setServerStatus(this.serverInput.isOnline);
  }

  setServerStatus(isOnline: boolean){
    if(isOnline){
      this.serverInput.isOnline = true;
      this.color = '#66BB6A';
      this.buttonText = 'Shut Down';
    }
    else{
      this.serverInput.isOnline = false;
      this.color='#FF6b6b';
      this.buttonText = 'Start';
    }
  }

  sendServerAction(onlineStatus: boolean){
    console.log(this.serverInput.name, " : ", onlineStatus);
    // this.serverInput.isOnline = ! this.serverInput.isOnline;
    this.setServerStatus(!onlineStatus);
  }
}
