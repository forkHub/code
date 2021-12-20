export class Env {
	private readonly _list: EnvObj[] = [];

	public get list(): EnvObj[] {
		return this._list;
	}

	baru(env: EnvObj): void {
		this._list.push(env);
	}

	getById(id: number): EnvObj {
		for (let i: number = 0; i < this._list.length; i++) {
			if (this._list[i].id == id) return this._list[i];
		}

		return null;
	}

	validasi(nama: string, id: number): boolean {

		if (!nama) return false;

		nama = nama.trim();
		if (nama.length == 0) return false;
		console.log('validasi nama: ' + nama + '|');

		for (let i: number = 0; i < this._list.length; i++) {
			if (this._list[i].nama == nama) {
				if (this._list[i].induk == id) {
					return false;
				}
			}
		}

		return true;
	}
}

class EnvObj {
	private _nama: string = '';
	private _value: string = '';
	private _id: number = 0;
	private _induk: number = 0;
	private _type: number = 0;	//string, angka, bundel
	private _ref: number = 0; 	//referensi ke variable lain

	public get ref(): number {
		return this._ref;
	}
	public set ref(value: number) {
		this._ref = value;
	}

	public get type(): number {
		return this._type;
	}
	public set type(value: number) {
		this._type = value;
	}

	public get induk(): number {
		return this._induk;
	}
	public set induk(value: number) {
		this._induk = value;
	}

	public get id(): number {
		return this._id;
	}
	public set id(value: number) {
		this._id = value;
	}

	public get nama(): string {
		return this._nama;
	}
	public set nama(value: string) {
		this._nama = value;
	}
	public get value(): string {
		return this._value;
	}
	public set value(value: string) {
		this._value = value;
	}
}