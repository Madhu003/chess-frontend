export class Cell {
	x: number;
	y: number;
	piece: Object;
	isActiveCell: number;

	constructor(x, y){
		this.x = x;
		this.y = y;
	}
}
