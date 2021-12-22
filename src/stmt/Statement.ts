import { BaseComponent } from "../comp/BaseComponent.js";
import { IPlaceHolder, IStatement, IStmtKomp } from "../Interface.js";
import { Type } from "../Type.js";
import { PlaceHolder } from "./PlaceHolder.js";
import { VarDecView } from "./VarDek.js";

export class Statement {
	private _list: IStatement[] = [];
	private _aktif: number = 0;

	public get aktif(): number {
		return this._aktif;
	}

	script(stmt: string): string {
		let hasil: string = '';

		//resolve parent


		return hasil;
	}

	render(obj: IStatement): void {
		let el: HTMLDivElement = document.createElement('div');
		el.classList.add('stmt');

		obj.komp.forEach((item: IStmtKomp) => {
			if (item.type == Type.STMT_KOMP_TEKS) {
				let span: HTMLSpanElement = document.createElement('span');
				el.appendChild(span);
				item.el = span;
			}

			if (item.type == Type.STMT_KOMP_PLACEHOLDER) {
				let div: HTMLDivElement = document.createElement('div');
				div.classList.add('placeholder');
				el.appendChild(div);
				item.el = div;

				let ph: IPlaceHolder = new PlaceHolder(item.phType, div, obj.id);
				obj.placeholders.push(ph);
			}
		});
	}

	public set aktif(value: number) {
		this._aktif = value;
	}

	public get list(): IStatement[] {
		return this._list;
	}

	sisip(st: IStatement): void {
		let list2: IStatement[] = [];
		console.debug('aktif ' + this._aktif);

		this.list.forEach((item: IStatement) => {
			list2.push(item);
			if (item.id == this._aktif) {
				list2.push(st);
				console.debug('insert setelah ' + item.id);
			}
		})

		if (this._aktif == 0) {
			console.debug('insert di akhir');
			list2.push(st);
		}

		this._list = list2.slice();

		console.debug('panjang list : ' + this._list.length);
	}

	hapus(id: number): void {
		for (let i: number = 0; i < this._list.length; i++) {
			if (this._list[i].id == id) {
				this._list.splice(i, 1);
			}
		}
	}

	viewByType(id: number): BaseComponent {
		if (Type.STMT_VAR_ISI == id) {
			return new VarDecView();
		}
		else {
			return null;
		}
	}

	getById(id: number): IStatement {
		for (let i: number = 0; i < this._list.length; i++) {
			if (this._list[i].id == id) return this._list[i];
		}

		return null;
	}
}