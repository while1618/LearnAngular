import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  serverElements = [
    { type: "server", name: "TestServer", content: "Just a test" },
  ];
  oddNumbers = [];
  evenNumbers = [];

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: "server",
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: "blueprint",
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onGameStarted(index: number) {
    if (index % 2 == 0) {
      this.evenNumbers.push(index);
    } else {
      this.oddNumbers.push(index);
    }
  }
}
