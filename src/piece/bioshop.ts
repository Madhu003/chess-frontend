import { Piece } from "./piece";
import { PieceType } from "../app/piece-type.enum";

export class Bioshop implements Piece{
	symbol: String;
	type: PieceType;

	constructor(type){
		this.symbol = (type == PieceType.WHITE) ? "&#9815;" : "&#9821;";
	}

	getArrayOfPosibleMove(x, y) {
		let 
			forRightDownPath = [],
			forLeftUpPath = [],
			forLeftDownPath = [],
			forRightUpPath = [];

		for(let i = 0 ; i < 8 ; i++) {
			let manipluationFector = i + 1;
			let forRightDown = { x : x + manipluationFector, y : y + manipluationFector };
			if(forRightDown.x >= 0 && forRightDown.x <= 7 && forRightDown.y >= 0 && forRightDown.y <= 7){
				forRightDownPath.push(forRightDown);	
			}

			let forLeftUp = { x : x - manipluationFector, y : y - manipluationFector };
			if(forLeftUp.x >= 0 && forLeftUp.x <= 7 && forLeftUp.y >= 0 && forLeftUp.y <= 7){
				forLeftUpPath.push(forLeftUp);	
			}

			let forLeftDown = { x : x - manipluationFector, y : y + manipluationFector };
			if(forLeftDown.x >= 0 && forLeftDown.x <= 7 && forLeftDown.y >= 0 && forLeftDown.y <= 7){
				forLeftDownPath.push(forLeftDown);	
			}

			let forRightUp = { x : x + manipluationFector, y : y - manipluationFector };
			if(forRightUp.x >= 0 && forRightUp.x <= 7 && forRightUp.y >= 0 && forRightUp.y <= 7){
				forRightUpPath.push(forRightUp);	
			}

		}

		return [forRightDownPath, forLeftUpPath, forLeftDownPath, forRightUpPath];
	}
}
