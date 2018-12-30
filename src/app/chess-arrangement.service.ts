import { Injectable } from '@angular/core';
import { Bioshop } from "../piece/bioshop";
import { King } from "../piece/king";
import { Queen } from "../piece/queen";
import { Knight } from "../piece/knight";
import { Rock } from "../piece/rock";
import { Pawn } from "../piece/pawn";
import { PieceType } from "./piece-type.enum";

@Injectable({
  providedIn: 'root'
})
export class ChessArrangementService {
	blackTeamStartingPoisition: Array<Object>;
	whiteTeamStartingPoisition: Array<Object>;

    constructor() { 
        console.log(PieceType);
  	    this.blackTeamStartingPoisition = [
  		    new Rock(PieceType.BLACK),
  		    new Bioshop(PieceType.BLACK),
  		    new Knight(PieceType.BLACK),
            new King(PieceType.BLACK),
  		    new Queen(PieceType.BLACK),
  		    new Knight(PieceType.BLACK),
  		    new Bioshop(PieceType.BLACK),
  		    new Rock(PieceType.BLACK)
  	    ];

  	    this.whiteTeamStartingPoisition = [
  		    new Rock(PieceType.WHITE),
  		    new Bioshop(PieceType.WHITE),
  		    new Knight(PieceType.WHITE),
            new King(PieceType.WHITE),
  		    new Queen(PieceType.WHITE),
  		    new Knight(PieceType.WHITE),
  		    new Bioshop(PieceType.WHITE),
  		    new Rock(PieceType.WHITE)
  	    ];
    }
}
