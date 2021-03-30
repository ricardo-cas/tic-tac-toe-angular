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

  setField(position: number, value: number): void {
    this.gameField[position] = value;
  }

  getPlayerColorClass(): string {
    const colorClass = this.currentTurn === 2 ? "player-two" : "player-one";
    return colorClass;
  }

  changePlayer(): void {
    this.currentTurn = this.currentTurn === 2 ? 1 : 2;
  }

  async checkGameEndWinner(): Promise<boolean> {
    let isWinner = true;

    if (isWinner) {
      this.gameEnds();
      return true;
    } else {
      return false;
    }
  }

  async checkGameEndFull(): Promise<boolean> {
    let isFull = true;

    if (this.gameField.includes(0)) {
      isFull = false;
    }
    if (isFull) {
      this.gameEnds();
      return true;
    } else {
      return false;
    }
  }

  gameEnds(): void {
    this.gameStatus = Status.STOP;
  }
}
