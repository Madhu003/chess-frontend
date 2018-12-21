import { Component } from '@angular/core';
import { ChessArrangementService } from './chess-arrangement.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(chessArrangementService: ChessArrangementService) {

  }

  name = "Madhu";
  grid = [];

  ngOnInit() {
    for (var i = 0; i < 8; i++) {
      var gridByY = [];
      for (var j = 0; j < 8; j++) {
        gridByY.push({x: i, y: j});
      }
      this.grid.push(gridByY);
    }
    console.log(this.grid);
  } 
}
