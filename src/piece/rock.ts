import {Piece} from "./piece";

export class Rock  implements Piece{
	symbol: String;

	constructor(type){
		this.symbol = (type == "white") ? "&#9814;" : "&#9820;";
	}

	getArrayOfPosibleMove(x, y) {
		let possiblePaths = [];

		for(let i = 0 ; i < 8 ; i++){
			possiblePaths.push({x: x, y: i});
			possiblePaths.push({x: i, y: y});
		}

		return possiblePaths;
	}
}