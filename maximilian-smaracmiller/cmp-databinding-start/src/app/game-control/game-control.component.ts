import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  static i = 0;
  @Output() gameStarted = new EventEmitter<number>();
  interval;

  constructor() {}

  ngOnInit(): void {}

  startGame() {
    this.interval = setInterval(
      () => this.gameStarted.emit(GameControlComponent.i++),
      1000
    );
  }

  stopGame() {
    clearInterval(this.interval);
  }
}
