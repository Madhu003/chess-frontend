import { Component } from '@angular/core';
import { ChessArrangementService } from './chess-arrangement.service';
import { Cell } from './cell';
import { Pawn } from '../piece/pawn'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    chessArrangementService: ChessArrangementService;

    constructor(chessArrangementService: ChessArrangementService) {
        this.chessArrangementService = chessArrangementService;
    }

    name = "Madhu";
    grid = [];

    ngOnInit() {
        for (var i = 0; i < 8; i++) {
            var gridByY = [];
            for (var j = 0; j < 8; j++) {
                gridByY.push(new Cell(j, i));
            }
            this.grid.push(gridByY);
        }
        console.log(this.grid);

        this.grid.forEach(row => {
            row.forEach(cell => {
                if(cell.y == 6){
                    cell.piece = new Pawn("white");
                }

                if(cell.y == 1){
                    cell.piece = new Pawn("black");
                }

                if(cell.y == 0){
                    cell.piece = this.chessArrangementService.blackTeamStartingPoisition[cell.x];
                }

                if(cell.y == 7){
                    cell.piece = this.chessArrangementService.whiteTeamStartingPoisition[cell.x];
                }
            });
        });

        console.log(this.chessArrangementService); 
    } 

    getCell(x, y): Cell {
        var fetchedCell;
        this.grid.forEach(row => {
            row.forEach(cell => {
                if(cell.x == x && cell.y == y){
                    fetchedCell = cell;
                }
            });
        });

        return fetchedCell;
    }

    clearAllCellFromAtiveState(){
        this.grid.forEach(row => {
            row.forEach(cell => {
                cell.isActiveCell = 0;
            });
        });
    } 

    onClick(cell){
        this.clearAllCellFromAtiveState();

        if(cell.piece) {
            cell.isActiveCell = 1;
            let path = cell.piece.getArrayOfPosibleMove(cell.x, cell.y);
            console.log(path);
            path.forEach(cordinates => {
                let cellForPatch = this.getCell(cordinates.x, cordinates.y);
                console.log(cellForPatch)
                cellForPatch.isActiveCell = 1;
            });
        }
    }
}
