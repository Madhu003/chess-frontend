import {Piece} from "./piece";

export class Queen  implements Piece{
	symbol: String;

	constructor(type){
		this.symbol = (type == "white") ? "&#9813;" : "&#9819;";
	}

	getArrayOfPosibleMove() {
		
	}
}