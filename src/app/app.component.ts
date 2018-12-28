import { Component } from "@angular/core";
import { ChessArrangementService } from "./chess-arrangement.service";
import { Cell } from "./cell";
import { Pawn } from "../piece/pawn";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  chessArrangementService: ChessArrangementService;

  constructor(chessArrangementService: ChessArrangementService) {
    this.chessArrangementService = chessArrangementService;
  }

  name = "Madhu";
  grid = [];
  selectedCell = null;

  ngOnInit() {
    for (var i = 0; i < 8; i++) {
      var gridByY = [];
      for (var j = 0; j < 8; j++) {
        gridByY.push(new Cell(j, i));
      }
      this.grid.push(gridByY);
    }

    this.grid.forEach(row => {
      row.forEach(cell => {
        if (cell.y == 6) {
          cell.piece = new Pawn("white");
        }

        if (cell.y == 1) {
          cell.piece = new Pawn("black");
        }

        if (cell.y == 0) {
          cell.piece = this.chessArrangementService.blackTeamStartingPoisition[
            cell.x
          ];
        }

        if (cell.y == 7) {
          cell.piece = this.chessArrangementService.whiteTeamStartingPoisition[
            cell.x
          ];
        }
      });
    });

    console.log(this);
  }

  getCell(x, y): Cell {
    var fetchedCell;
    this.grid.forEach(row => {
      row.forEach(cell => {
        if (cell.x == x && cell.y == y) {
          fetchedCell = cell;
        }
      });
    });

    return fetchedCell;
  }

  clearAllCellFromAtiveState() {
    this.grid.forEach(row => {
      row.forEach(cell => {
        cell.isActiveCell = 0;
      });
    });

    this.selectedCell = null;
  }

  onClick(cell) {
    if(!this.selectedCell && !cell.piece) {
        this.clearAllCellFromAtiveState();
    } else if(!this.selectedCell && cell.piece) {
        this.clearAllCellFromAtiveState();
        this.setPieceActivatedAndShowPath(cell);
    } else if(this.selectedCell && cell.isActiveCell) {
        // need code for move piece
        cell.piece = this.selectedCell.piece;
        this.selectedCell.piece = null;
        this.selectedCell = null;
        this.clearAllCellFromAtiveState();
    } else if(this.selectedCell && cell.piece) {
        this.setPieceActivatedAndShowPath(cell);
    } else if(this.selectedCell && !cell.piece) {
        this.clearAllCellFromAtiveState();
    }  
  }

  setPieceActivatedAndShowPath(cell) {
      if (cell.piece) {
      cell.isActiveCell = 1;
      this.selectedCell = cell;

      let paths = cell.piece.getArrayOfPosibleMove(cell.x, cell.y);
      console.log(paths)
      for (let i = 0; i < paths.length; i++) {
        let path = paths[i];
        if (path) {
          if (path instanceof Array) {
            for (let j = 0; j < path.length; i++) {
              let cordinates = path[j];

              let cellForPatch = this.getCell(cordinates.x, cordinates.y);
              console.log(cellForPatch);
              if (cellForPatch.piece) {
                break;
              } else {
                cellForPatch.isActiveCell = 1;
              }
            }
          } else {
            let cellForPatch = this.getCell(path.x, path.y);
            console.log(cellForPatch);
            if (cellForPatch.piece) {
              break;
            } else {
              cellForPatch.isActiveCell = 1;
            }
          }
        }
      }
    }
  }
}