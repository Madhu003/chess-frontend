import {Piece} from "./piece";

export class Bioshop implements Piece{
	symbol: String;

	constructor(type){
		this.symbol = (type == "white") ? "&#9815;" : "&#9821;";
	}

	getArrayOfPosibleMove(x, y) {
		let possiblePaths = [];

		for(let i = 0 ; i < 8 ; i++){
			let forRightDown = { x : x + i, y : y + i };

			if(forRightDown.x >= 0 && forRightDown.x <= 7 && forRightDown.y >= 0 && forRightDown.y <= 7){
				possiblePaths.push(forRightDown);	
			}

			let forLeftUp = { x : x - i, y : y - i };

			if(forLeftUp.x >= 0 && forLeftUp.x <= 7 && forLeftUp.y >= 0 && forLeftUp.y <= 7){
				possiblePaths.push(forLeftUp);	
			}

			let forLeftDown = { x : x - i, y : y + i };

			if(forLeftDown.x >= 0 && forLeftDown.x <= 7 && forLeftDown.y >= 0 && forLeftDown.y <= 7){
				possiblePaths.push(forLeftDown);	
			}

			let forRightUp = { x : x + i, y : y - i };

			if(forRightUp.x >= 0 && forRightUp.x <= 7 && forRightUp.y >= 0 && forRightUp.y <= 7){
				possiblePaths.push(forRightUp);	
			}

		}

		return possiblePaths;
	}
}
