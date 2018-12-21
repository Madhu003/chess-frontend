import {Piece} from "./piece";

export class Pawn  implements Piece{
	symbol: String;
	type: String;

	constructor(type){
		this.type = type;
		this.symbol = (type == "white") ? "&#9817;" : "&#9823;";
	}

	getArrayOfPosibleMove(x, y) {
		let posiblepaths = [];
		if(this.type == "white") {
			posiblepaths.push({x: x, y: y-1});
			posiblepaths.push({x: x, y: y-2});
			return posiblepaths;
		} else {
			posiblepaths.push({x: x, y: y+1});
			posiblepaths.push({x: x, y: y+2});
			return posiblepaths;
		}
	}
}