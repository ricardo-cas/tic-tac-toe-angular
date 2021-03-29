import { Component, OnInit } from "@angular/core";

@Component({
  // utilizando um seletor, pegando o elemento html
  selector: "app-game",
  // podemo usar também um seletor de css/scss
  // selector: '.app-game',
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.scss"],
})
export class GameComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
