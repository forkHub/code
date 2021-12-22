import { code } from "../Code.js";
import { IPlaceHolder, IStatement } from "../Interface.js";
import { State } from "../State.js";

export class PlaceHolder implements IPlaceHolder {
	private _type: number;
	private _el: HTMLElement;
	private _refVar: number = 0;
	private _refStmt: number = 0;

	constructor(type: number, el: HTMLElement, stmt: number) {
		this._type = type;
		this._el = el;
		this._refStmt = stmt;

		el.onclick = (e: MouseEvent) => { this.klik(e); }
	}

	gantiNamaFlow(): void {
		let stmt: IStatement = code.stmt.getById(this._refStmt);
		let nama: string = window.prompt('nama', stmt.nama);

		stmt.nama = nama;
		stmt.view.updateView();
		code.state.aktif = State.ST_PLACEHOLDER_DIPILIH;
	}

	bisaKlik(): boolean {
		if (State.ST_STMT_EDIT == code.state.aktif) return true;
		if (State.ST_PLACEHOLDER_DIPILIH == code.state.aktif) return true;

		return false;
	}

	klik(e: MouseEvent): void {
		if (this.bisaKlik()) {

			//validasi stmt dipilih
			if (code.stmt.aktif == this.refStmt) {
				e.stopPropagation();

				//view
				if (code.placeholderDipilih) {
					code.placeholderDipilih.el.classList.remove('dipilih');
				}
				code.placeholderDipilih = this;
				this.el.classList.add('dipilih');

				code.state.aktif = State.ST_PLACEHOLDER_DIPILIH;
				code.menu.render();
			}
			else {
				console.debug('klik place holder beda stmt, stmt: ' + this._refStmt + '/aktif: ' + code.stmt.aktif);
			}
		}
		else {
			console.debug('placeholder click failed, state: ' + code.state.aktif);
		}
	}

	init(): void {

	}

	public get el(): HTMLElement {
		return this._el;
	}

	public get type(): number {
		return this._type;
	}

	public get refStmt(): number {
		return this._refStmt;
	}
	public set refStmt(value: number) {
		this._refStmt = value;
	}

	// public set type(value: string) {
	// 	this._type = value;
	// }

	// public get value(): any {
	// 	return this._value;
	// }
	// public set value(value: any) {
	// 	this._value = value;
	// }

	public get refVar(): number {
		return this._refVar;
	}
	public set refVar(value: number) {
		this._refVar = value;
	}


}