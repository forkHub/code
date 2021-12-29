import { HalDepan } from "./HalDepan.js";
import { Env } from "./Env.js";
import { Id } from "./Id.js";
import { IModul } from "./Interface.js";
import { Menu } from "./Menu.js";
import { Modul } from "./Modul.js";
import { State } from "./State.js";
import { Statement } from "./stmt/Statement.js";

class Code {
	private readonly _halDaftarStatement: HalDepan = new HalDepan();
	private readonly _env: Env = new Env();
	private readonly _id: Id = new Id();
	private readonly _stmt: Statement = new Statement();
	private readonly _state: State = new State();
	private readonly _menu: Menu = new Menu();
	private readonly _modul: Modul = new Modul();

	private _elAktif: number = 0;

	constructor() {
		console.debug('code constructor');
	}

	init(): void {
		this._state.aktif = (State.ST_AWAL);
		this.data();
		this.halDaftarStatement.attach(window.document.body);
		this.halDaftarStatement.init();
	}

	data(): void {
		console.debug('data');
		let utama: IModul = this._modul.buatFlow("utama", 0);
		utama.readonly = true;
		utama.el.attach(this._halDaftarStatement.cont);
		console.debug(utama.el);
	}

	public get modul(): Modul {
		return this._modul;
	}

	public get state(): State {
		return this._state;
	}

	public get stmt(): Statement {
		return this._stmt;
	}

	public get env(): Env {
		return this._env;
	}

	public get id(): Id {
		return this._id;
	}

	public get menu(): Menu {
		return this._menu;
	}

	public get halDaftarStatement(): HalDepan {
		return this._halDaftarStatement;
	}

	public get elAktif(): number {
		return this._elAktif;
	}
	public set elAktif(value: number) {
		this._elAktif = value;
	}


}

export var code: Code;
window.onload = () => {
	console.debug('onload:');
	code = new Code();
	code.init();
}

window.onclick = () => {
	console.debug('window on click');
}