import { DaftarStatement } from "./DaftarStatement.js";
import { Env } from "./Env.js";
import { Id } from "./Id.js";
import { IPlaceHolder } from "./Interface.js";
import { Menu } from "./Menu.js";
import { State } from "./State.js";
// import { PlaceHolder } from "./stmt/PlaceHolder.js";
import { Statement } from "./stmt/Statement.js";
import { VarDek } from "./stmt/VarDek.js";

class Code {
	private readonly _halDaftarStatement: DaftarStatement = new DaftarStatement();
	private readonly _env: Env = new Env();
	private readonly _id: Id = new Id();
	private readonly _stmt: Statement = new Statement();
	private readonly _state: State = new State();
	private readonly _menu: Menu = new Menu();
	private readonly _baris: any[];

	private _placeholderDipilih: IPlaceHolder;

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
		this._stmt.sisip(new VarDek());
	}

	public get placeholderDipilih(): IPlaceHolder {
		return this._placeholderDipilih;
	}
	public set placeholderDipilih(value: IPlaceHolder) {
		this._placeholderDipilih = value;
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

}

export var code: Code;
window.onload = () => {
	console.debug('onload:');
	code = new Code();
	code.init();
	console.log('code: ' + code);
}

window.onclick = () => {
	console.debug('window on click');
}