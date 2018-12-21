import {Piece} from "./piece";

export class Rock  implements Piece{
	symbol: String;

	constructor(type){
		this.symbol = (type == "white") ? "&#9814;" : "&#9820;";
	}

	getArrayOfPosibleMove() {
		
	}
}