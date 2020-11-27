import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  public allowNewServer = false;
  public serverCreationStatus = 'No server was created';
  public serverName = 'Default Server Name';
  public username = '';

  public constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  public onCreateServer() {
    this.serverCreationStatus = `Server was created. Name is ${this.serverName}`;
  }

  public onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
