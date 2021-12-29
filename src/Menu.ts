import { code } from "./Code.js";
import { Tombol } from "./comp/Tombol.js";
import { State } from "./State.js";

export class Menu {
	private _cont: HTMLDivElement;

	render2(tombol: HTMLButtonElement[]): void {
		console.debug('render, state: ' + code.state.aktif);
		this._cont.innerHTML = '';

		tombol.forEach((tombol: HTMLButtonElement) => {
			this._cont.appendChild(tombol);
		})
	}

	render(): void {
		/*
		console.debug('render, state: ' + code.state.aktif);
		this._cont.innerHTML = '';

		if (State.ST_AWAL == code.state.aktif) {
			// this._cont.appendChild(this.stmtBuat());
		}
		else if (State.ST_MODUL_DIPILIH == code.state.aktif) {
			//this.cont.appendChild();
		}
		else if (State.ST_STMT_DIPILIH == code.state.aktif) {
			this.cont.appendChild(this.stmtBuat());
			this.cont.appendChild(this.stmtEdit());
			this.cont.appendChild(this.stmtHapus());
		}
		else if (State.ST_STMT_EDIT == code.state.aktif) {
			this.cont.appendChild(this.stmtEditKembali());
		}
		else if (State.ST_PLACEHOLDER_DIPILIH == code.state.aktif) {
			this.cont.appendChild(this.phEdit());
		}
		else if (State.ST_PLACEHOLDER_EDIT) {
			// if (Type.PH_NAMA == code.placeholderDipilih.type) {

			// }
			// else {
			// 	this.cont.appendChild(this.phLiteral());
			// 	this.cont.appendChild(this.phRef());
			// }

		}
		else if (State.ST_PILIH_TYPE_PLACEHOLDER == code.state.aktif) {
			//literal


			//ref
		}
		*/
	}

	stmtBuat(): HTMLButtonElement {
		return Tombol.buat('tambah', () => {
			console.debug('tombol buat click');
			code.halDaftarStatement.buatStatementFlow();
		});
	}

	stmtEdit(): HTMLButtonElement {
		return Tombol.buat('edit', () => {
			code.state.aktif = State.ST_STMT_EDIT;
			this.render();
		})
	}

	stmtHapus(): HTMLButtonElement {
		return Tombol.buat("hapus", () => {
			console.debug('tombol hapus click');
			code.stmt.hapus(code.stmt.aktif);
			code.stmt.aktif = 0;
			// code.halDaftarStatement.renderDaftar();
			code.state.aktif = State.ST_AWAL;
			// this.render();
		})
	}

	stmtEditKembali(): HTMLButtonElement {
		return Tombol.buat("<<<", () => {
			code.state.aktif = State.ST_STMT_DIPILIH;
			// this.render();
		})

	}

	phEdit(): HTMLButtonElement {
		return Tombol.buat('edit', () => {

		});
	}

	phLiteral(): HTMLButtonElement {
		return Tombol.buat("literal", () => {
			//TODO:
			this.render();
		})
	}

	phRef(): HTMLButtonElement {
		return Tombol.buat("ref", () => {
			//TODO:
			this.render();
		})
	}


	public get cont(): HTMLDivElement {
		return this._cont;
	}
	public set cont(value: HTMLDivElement) {
		this._cont = value;
	}


}