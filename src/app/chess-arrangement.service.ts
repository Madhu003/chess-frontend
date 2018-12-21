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

  constructor() { 
  	console.log(Bioshop)
  }

  ngOnInit() {
  	console.log(Bioshop)
  }
}
