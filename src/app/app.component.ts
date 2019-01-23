import { Component } from '@angular/core';
import { ChessArrangementService } from './chess-arrangement.service';
import { Cell } from './cell';
import { Pawn } from '../piece/pawn';
import { PlayerState } from './player-state';
import { PieceType } from './piece-type.enum';

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

    name = 'Madhu';
    grid = [];
    selectedCell = null;
    boardCordinates = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    whiteStateObject = new PlayerState(PieceType.WHITE);
    blackStateObject = new PlayerState(PieceType.BLACK);
    activePlayer: PieceType = PieceType.WHITE;

    ngOnInit() {
        for (let i = 0; i < 8; i++) {
            let gridByY = [];
            for (let j = 0; j < 8; j++) {
                gridByY.push(new Cell(j, i));
            }
            this.grid.push(gridByY);
        }

        this.grid.forEach(row => {
            row.forEach(cell => {
                if (cell.y == 6) {
                    cell.piece = new Pawn(PieceType.WHITE);
                }

                if (cell.y == 1) {
                    cell.piece = new Pawn(PieceType.BLACK);
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

        this.whiteStateObject.haveChance = true;

        console.log(this);
    }

    getCell(x, y): Cell {
        let fetchedCell;
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
        console.log()
        if ((this.selectedCell && !cell.piece) || (cell.piece && cell.piece.type == this.activePlayer)) {
            if (this.selectedCell && cell.piece == this.selectedCell.piece) {
                this.clearAllCellFromAtiveState();
            } else if (!this.selectedCell && !cell.piece) {
                this.clearAllCellFromAtiveState();
            } else if (!this.selectedCell && cell.piece) {
                this.setPieceActivatedAndShowPath(cell);
            } else if (this.selectedCell && cell.isActiveCell) {
                // need code for move piece
                cell.piece = this.selectedCell.piece;
                this.selectedCell.piece = null;
                this.selectedCell = null;
                this.clearAllCellFromAtiveState();
                if (cell.piece instanceof Pawn) {
                    cell.piece.isPlayedOnce = true;
                }
                this.switchPlayer();
            } else if (this.selectedCell && cell.piece) {
                this.setPieceActivatedAndShowPath(cell);
            } else if (this.selectedCell && !cell.piece) {
                this.clearAllCellFromAtiveState();
            }
        }
    }

    switchPlayer() {
        if (this.whiteStateObject.haveChance) {
            this.whiteStateObject.haveChance = false;
            this.blackStateObject.haveChance = true;
            this.activePlayer = PieceType.BLACK;
        } else {
            this.whiteStateObject.haveChance = true;
            this.blackStateObject.haveChance = false;
            this.activePlayer = PieceType.WHITE;
        }

        console.log(this.activePlayer);
    }

    setPieceActivatedAndShowPath(cell) {
        this.clearAllCellFromAtiveState();

        if (cell.piece) {
            cell.isActiveCell = 1;
            this.selectedCell = cell;

            let paths = cell.piece.getArrayOfPosibleMove(cell.x, cell.y);
            console.log(paths);
            for (let i = 0; i < paths.length; i++) {
                let path = paths[i];
                if (path) {
                    if (path instanceof Array) {
                        for (let j = 0; j < path.length; j++) {
                            let coordinates = path[j];
                            let cellForPatch = this.getCell(
                                coordinates.x,
                                coordinates.y
                            );

                            if (cellForPatch.piece) {
                                break;
                            } else {
                                cellForPatch.isActiveCell = 1;
                            }
                        }
                    } else {
                        let cellForPatch = this.getCell(path.x, path.y);

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
