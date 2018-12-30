import {Piece} from "./piece";

export class Pawn  implements Piece{
	symbol: String;
	type: String;

	constructor(type){
		this.type = type;
		this.symbol = (type == "white") ? "&#9817;" : "&#9823;";
	}

	getArrayOfPosibleMove(x, y) {
		let possiblePaths = [];
		
		if(this.type == "white") {
			possiblePaths.push({x: x, y: y-1});
			possiblePaths.push({x: x, y: y-2});
		} else {
			possiblePaths.push({x: x, y: y+1});
			possiblePaths.push({x: x, y: y+2});
		}

		return possiblePaths;
	}
}