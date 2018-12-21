import {Piece} from "./piece";

export class Knight implements Piece{
	symbol: String;
	type: String;

	constructor(type){
		this.symbol = (type == "white") ? "&#9816;" : "&#9822;";
		this.type = type;
	}

	getArrayOfPosibleMove(x, y) {
		let possiblePaths = [];
		if(this.type == "white") {
			possiblePaths.push({x: x+1, y: y-2});
			possiblePaths.push({x: x-1, y: y-2});
		} else {
			possiblePaths.push({x: x+1, y: y+2});
			possiblePaths.push({x: x-1, y: y+2});
		}
		return possiblePaths;
	}
}