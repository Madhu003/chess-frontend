import { Piece } from "./piece";
import { PieceType } from "../app/piece-type.enum";

export class Knight implements Piece{
	symbol: String;
	type: PieceType;

	constructor(type){
		this.symbol = (type == PieceType.WHITE) ? "&#9816;" : "&#9822;";
		this.type = type;
	}

	getArrayOfPosibleMove(x, y) {
		let possiblePaths = [
			{x: x + 1 , y: y - 2}, // right top first
			{x: x + 2 , y: y - 1}, // right top second
			{x: x - 1 , y: y - 2}, // left top first
			{x: x - 2 , y: y - 1}, // left top second
			{x: x - 2 , y: y + 1},
			{x: x - 1 , y: y + 2},
			{x: x + 1 , y: y + 2},
			{x: x + 2 , y: y + 1}
		];

		let filteredPath = [];

		possiblePaths.forEach(coordinates => {
			if(coordinates.x >= 0 && coordinates.x <= 7 && coordinates.y >= 0 && coordinates.y <= 7){
				filteredPath.push([coordinates]);
			}
		});
		
		console.log(filteredPath, "in")
		return filteredPath;
	}
}