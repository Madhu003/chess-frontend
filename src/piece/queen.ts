import { Piece } from "./piece";
import { Rock } from "./rock";
import { Bioshop } from "./bioshop";
import { PieceType } from "../app/piece-type.enum";

export class Queen  implements Piece{
	symbol: String;
	type: PieceType;

	constructor(type){
		this.symbol = (type == PieceType.WHITE) ? "&#9812;" : "&#9818;";
	}

	getArrayOfPosibleMove(x, y) {
		let pathsFromBioshop = new Bioshop("").getArrayOfPosibleMove(x, y);
		let pathsFromRock = new Rock("").getArrayOfPosibleMove(x, y);
		console.log(pathsFromBioshop)
		return pathsFromBioshop.concat(pathsFromRock);	
	}
}