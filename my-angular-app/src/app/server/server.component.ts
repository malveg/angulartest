import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    id: number;
    status: string;

    constructor(){
        this.id = 0;
        this.status = "Offline";
    }

    getServerName(){
        return "Server"+this.id.toString();
    }

    getServerStatus(){
        return this.status;
    }
}