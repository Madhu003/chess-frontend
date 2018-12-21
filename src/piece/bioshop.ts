import {Piece} from "./piece";

export class Bioshop implements Piece{
	symbol: String;

	constructor(type){
		this.symbol = (type == "white") ? "&#9815;" : "&#9821;";
	}

	getArrayOfPosibleMove(x, y) {
		let possiblePaths = [];

		for(let i = 0 ; i < 8 ; i++){
			possiblePaths.push({x: x + i, y: y + i});
		}

		return possiblePaths;
	}
}
