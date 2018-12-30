import { PieceType } from "../app/piece-type.enum";

export interface Piece {
	symbol: String;
	getArrayOfPosibleMove: Function;
	type: PieceType;
}
