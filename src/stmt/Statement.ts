import { BaseComponent } from "../comp/BaseComponent.js";
import { IStatement } from "../Interface.js";
import { Type } from "../Type.js";
import { VarDecView } from "./VarDek.js";

export class Statement {
	private _list: IStatement[] = [];
	private _aktif: number = 0;

	public get aktif(): number {
		return this._aktif;
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