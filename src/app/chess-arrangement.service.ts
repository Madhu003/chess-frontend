import { Injectable } from '@angular/core';
import { Bioshop } from "../piece/bioshop";
import { King } from "../piece/king";
import { Queen } from "../piece/queen";
import { Knight } from "../piece/knight";
import { Rock } from "../piece/rock";
import { Pawn } from "../piece/pawn";

@Injectable({
  providedIn: 'root'
})
export class ChessArrangementService {
	blackTeamStartingPoisition: Array<Object>;
	whiteTeamStartingPoisition: Array<Object>;

    constructor() { 
  	    this.blackTeamStartingPoisition = [
  		    new Rock("black"),
  		    new Bioshop("black"),
  		    new Knight("black"),
            new King("black"),
  		    new Queen("black"),
  		    new Knight("black"),
  		    new Bioshop("black"),
  		    new Rock("black")
  	    ];

  	    this.whiteTeamStartingPoisition = [
  		    new Rock("white"),
  		    new Bioshop("white"),
  		    new Knight("white"),
  		    new Queen("white"),
            new King("white"),
  		    new Knight("white"),
  		    new Bioshop("white"),
  		    new Rock("white")
  	    ];
    }
}
