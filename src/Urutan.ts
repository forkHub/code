export class Urutan {
	private _kep: UrutObj;

	public get kep(): UrutObj {
		return this._kep;
	}
	public set kep(value: UrutObj) {
		this._kep = value;
	}

	constructor() {

	}

	tambah(id: number, setelah: number): void {
		id;
		setelah;
	}

}

class UrutObj {
	seb: UrutObj;
	id: number;
}