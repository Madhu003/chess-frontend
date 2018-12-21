import {Piece} from "./piece";

export class Pawn  implements Piece{
	symbol: String;

	constructor(type){
		this.symbol = (type == "white") ? "&#9817;" : "&#9823;";
	}

	getArrayOfPosibleMove() {
		
	}
}