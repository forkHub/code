import { DaftarStatement } from "./DaftarStatement.js";
import { Env } from "./Env.js";
import { Id } from "./Id.js";
import { Menu } from "./Menu.js";
import { State } from "./State.js";
import { Statement } from "./stmt/Statement.js";

class Code {
	private readonly _halDaftarStatement: DaftarStatement = new DaftarStatement();
	private readonly _env: Env = new Env();
	private readonly _id: Id = new Id();
	private readonly _stmt: Statement = new Statement();
	private readonly _state: State = new State();
	private readonly _menu: Menu = new Menu();

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

	public get halDaftarStatement(): DaftarStatement {
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