import {Piece} from "./piece";

export class King  implements Piece{
	symbol: String;
	type: String;

	constructor(type){
		this.type = type;
		this.symbol = (type == "white") ? "&#9813;" : "&#9819;";
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
