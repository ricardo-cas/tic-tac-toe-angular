import { Component, OnInit } from "@angular/core";
import { GameLogic } from "../gamelogic";

@Component({
  // utilizando um seletor, pegando o elemento html
  selector: "app-game",
  // podemo usar também um seletor de css/scss
  // selector: '.app-game',
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.scss"],
  providers: [GameLogic],
})
export class GameComponent implements OnInit {
  constructor(public game: GameLogic) {}
  ngOnInit(): void {}

  starGame(): void {
    this.game.gameStart();
  }
}
