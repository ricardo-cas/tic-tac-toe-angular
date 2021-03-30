import { Component, OnInit } from "@angular/core";
// import { promises } from  "node:dns";
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

  startGame(): void {
    this.game.gameStart();
    const currentPlayer = "Vez do jogador: Nº  " + this.game.currentTurn;
    const information = document.querySelector(".current-status");
    information.innerHTML = currentPlayer;
  }

  async clickSubfield(subField: any): Promise<void> {
    if (this.game.gameStatus === 1) {
      const position = subField.currentTarget.getAttribute("position");
      console.log("Posição clicada: " + position);
    }
  }
}
