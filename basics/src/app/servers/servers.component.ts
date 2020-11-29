import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  styles: [
    `
      .log {
        font-size: large;
      }
    `,
  ],
})
export class ServersComponent {
  public allowNewServer = false;
  public serverCreationStatus = 'No server was created';
  public serverName = 'Default Server Name';
  public username = '';
  public serverCreated = false;
  public servers = ['TestServer', 'ProdServer'];
  public showDetails = false;
  public log = [];

  public constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  public onCreateServer() {
    this.serverCreationStatus = `Server was created. Name is ${this.serverName}`;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  public onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  public toggle() {
    this.showDetails = !this.showDetails;
    this.log.push(new Date());
  }
}
