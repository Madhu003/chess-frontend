import { Piece } from './piece';
import { PieceType } from '../app/piece-type.enum';

export class Pawn implements Piece {
	symbol: String;
	type: PieceType;
	isPlayedOnce = false;

	constructor(type) {
		this.type = type;
		this.symbol = (type == PieceType.WHITE) ? '&#9817;' : '&#9823;';
	}

	getArrayOfPosibleMove(x, y) {
		let possiblePaths = [];

		if (this.type == PieceType.WHITE) {
			possiblePaths.push({ x: x, y: y - 1 });
			if (!this.isPlayedOnce) possiblePaths.push({ x: x, y: y - 2 });
		} else {
			possiblePaths.push({ x: x, y: y + 1 });
			if (!this.isPlayedOnce) possiblePaths.push({ x: x, y: y + 2 });
		}

		return possiblePaths;
	}
}