import {Piece} from "./piece";

export class King  implements Piece{
	symbol: String;

	constructor(type){
		this.symbol = (type == "white") ? "&#9816;" : "&#9822;";
	}

	getArrayOfPosibleMove() {
		
	}
}
