import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.less']
})
export class ServersComponent implements OnInit {
  serverCount:number;

  constructor() { 
    this.serverCount = 0;
  }

  ngOnInit(): void {
  }

  getServerCount(){
    return this.serverCount;
  }

  getServers(){
    return new Array(this.serverCount);
  }

  onCreateServer(){
    //Create a new server
    this.serverCount = this.serverCount+1;
  }

  onDeleteServer(){
    //Remove a server
    this.serverCount = this.serverCount-1;
  }

}
