import { Status } from "./gamestatus";

export class GameLogic {
  gameField: Array<number> = [];
  currentTurn: number;
  gameStatus: Status;

  public constructor() {
    this.gameStatus = Status.STOP;
    this.gameField = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  }

  gameStart(): void {
    this.gameStatus = Status.START;
    this.gameField = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.currentTurn = this.randomPlayerStart();
    console.log(this.currentTurn);
  }

  randomPlayerStart(): number {
    const startPlayer = Math.floor(Math.random() * 2 + 1);
    return startPlayer;
  }
}
