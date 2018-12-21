import {Piece} from "./piece";

export class Bioshop implements Piece{
	symbol: String;

	constructor(type){
		this.symbol = (type == "white") ? "&#9815;" : "&#9821;";
	}

	getArrayOfPosibleMove() {
		
	}
}
