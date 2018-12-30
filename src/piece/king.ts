import { Piece } from "./piece";
import { PieceType } from "../app/piece-type.enum";

export class King  implements Piece{
	symbol: String;
	type: PieceType;

	constructor(type){
		this.type = type;
		this.symbol = (type == PieceType.WHITE) ? "&#9813;" : "&#9819;";
	}

	getArrayOfPosibleMove(x, y) {
		let possiblePaths = [
			[{x: x, y: y - 1}],
			[{x: x + 1, y: y - 1}],
			[{x: x + 1, y: y}],
			[{x: x + 1, y: y + 1}],
			[{x: x, y: y + 1}],
			[{x: x - 1, y: y + 1}],
			[{x: x - 1, y: y - 1}],
			[{x: x - 1, y: y}]
		];
		

		return possiblePaths;
	}
}
