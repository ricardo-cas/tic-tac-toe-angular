import { Component, OnInit } from "@angular/core";
// import { promises } from  "node:dns";
import { GameLogic } from "../gamelogic";
import { HttpClient } from "@angular/common/http";
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
      const information = document.querySelector(".current-status");

      // console.log("Posição clicada: " + position);

      this.game.setField(position, this.game.currentTurn);
      const color = this.game.getPlayerColorClass();
      subField.currentTarget.classList.add(color);
      // console.log(color);

      await this.game.checkGameEndWinner().then((end: boolean) => {
        if (this.game.gameStatus === 0 && end) {
          information.innerHTML = "O vencedor é: " + this.game.currentTurn;
        }
      });

      await this.game.checkGameEndFull().then((end: boolean) => {
        if (this.game.gameStatus === 0 && end) {
          information.innerHTML = "empatou! tentem novamente! :)  ";
        }
      });

      this.game.changePlayer();

      if (this.game.gameStatus === 1) {
        const currentPlayer = "Vez do jogador: Nº  " + this.game.currentTurn;
        information.innerHTML = currentPlayer;
      }
    }
  }
}
