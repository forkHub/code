export class State {
	public static readonly ST_AWAL: number = 100;
	public static readonly ST_STMT_DIPILIH: number = 200;
	public static readonly ST_STMT_EDIT: number = 300;
	public static readonly ST_PLACEHOLDER_DIPILIH: number = 400;
	public static readonly ST_PILIH_TYPE_PLACEHOLDER: number = 500;

	private _aktif: number = 1;

	public get aktif(): number {
		return this._aktif;
	}
	public set aktif(value: number) {
		this._aktif = value;
	}

	// private list: number[] = [];

	// push(id: number): void {
	// 	this.list.push(id);
	// }

	// pop(): void {
	// 	this.list.pop();
	// }

	// set(id: number): void {
	// 	this.list[this.list.length - 1] = id;
	// }
}