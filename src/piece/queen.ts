import { Piece } from "./piece";
import { Rock } from "./rock";
import { Bioshop } from "./bioshop";


export class Queen  implements Piece{
	symbol: String;

	constructor(type){
		this.symbol = (type == "white") ? "&#9812;" : "&#9818;";
	}

	getArrayOfPosibleMove(x, y) {
		let pathsFromBioshop = new Bioshop("").getArrayOfPosibleMove(x, y);
		let pathsFromRock = new Rock("").getArrayOfPosibleMove(x, y);
		console.log(pathsFromBioshop)
		return pathsFromBioshop.concat(pathsFromRock);	
	}
}