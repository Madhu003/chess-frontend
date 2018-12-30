import { Piece } from "./piece";
import { PieceType } from "../app/piece-type.enum";

export class Rock  implements Piece{
	symbol: String;
	type: PieceType;

	constructor(type){
		this.symbol = (type == PieceType.WHITE) ? "&#9814;" : "&#9820;";
	}

	getArrayOfPosibleMove(x, y) {
		let downPath = [],
			upPath = [],
			leftPath = [],
			rightPath = [];

		for(let i = 0 ; i < 8 ; i++){
			let manipluationFector = i + 1;

			let down = { x: x, y : y + manipluationFector} ;
			if(down.x >= 0 && down.x <= 7 && down.y >= 0 && down.y <= 7){
				downPath.push(down);	
			}

			let up = { x: x, y : y - manipluationFector} ;
			if(up.x >= 0 && up.x <= 7 && up.y >= 0 && up.y <= 7){
				upPath.push(up);	
			}

			let left = { x: x - manipluationFector, y : y} ;
			if(left.x >= 0 && left.x <= 7 && left.y >= 0 && left.y <= 7){
				leftPath.push(left);	
			}	

			let right = { x: x + manipluationFector, y : y} ;
			if(right.x >= 0 && right.x <= 7 && right.y >= 0 && right.y <= 7){
				rightPath.push(right);	
			}						
		}

		return [downPath, upPath, leftPath, rightPath];
	}
}