import {Piece} from "./piece";

export class King  implements Piece{
	symbol: String;
	type: String;

	constructor(type){
		this.type = type;
		this.symbol = (type == "white") ? "&#9812;" : "&#9818;";
	}

	getArrayOfPosibleMove(x, y) {
		let possiblePaths = [];
		if(this.type == "white") {
			possiblePaths.push({x: x-1, y: y});
			possiblePaths.push({x: x - 1, y: y - 1});
			possiblePaths.push({x: x, y: y - 1});
			possiblePaths.push({x: x + 1, y: y - 1});
			possiblePaths.push({x: x + 1, y: y});	
		} else {
			possiblePaths.push({x: x-1, y: y});
			possiblePaths.push({x: x - 1, y: y + 1});
			possiblePaths.push({x: x, y: y - 1});
			possiblePaths.push({x: x + 1, y: y + 1});
			possiblePaths.push({x: x + 1, y: y});
		}
		return possiblePaths;
	}
}
