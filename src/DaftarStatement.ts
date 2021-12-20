import { code } from "./Code.js";
import { BaseComponent } from "./comp/BaseComponent.js";
// import { Tombol } from "./comp/Tombol.js";
import { IStatement } from "./Interface.js";
import { PilihStatementDlg } from "./PilihStatement.js";
// import { State } from "./State.js";
import { Type } from "./Type.js";
import { VarDek } from "./stmt/VarDek.js";

export class DaftarStatement extends BaseComponent {
	private readonly _pilih: PilihStatementDlg = new PilihStatementDlg();
	constructor() {
		super();

		console.debug('daftar statement constructor');

		this._template = `
			<div class='daftar-statement'>
				<div class='cont'>
				</div>
				<div class='menu-cont padding-4'>

				</div>
			</div>

		`;
		this.build();

		this.pilih.selesai = (type: number) => {
			if (type == Type.STMT_VAR_ISI) {
				code.stmt.sisip(new VarDek());
			}
			else {
				//TODO: tambah item lain
			}
			this.renderDaftar();
		}
	}

	init(): void {
		code.menu.cont = this.menu;
		this.pilih.init();
		this.renderDaftar();
		code.menu.render();
	}

	buatStatementFlow(): void {
		this.pilih.attach(document.body);
	}

	renderDaftar(): void {

		let scroll: number = this.cont.scrollTop;

		this.cont.innerHTML = '';

		code.stmt.list.forEach((el: IStatement) => {
			el.view.elHtml.classList.remove('dipilih');
			el.view.attach(this.cont);

			// el.view.elHtml.onclick = (e: MouseEvent) => {
			// 	e.stopPropagation();
			// 	this.itemKlik(el);
			// }
		});

		this.cont.scrollTo(0, scroll);

		if (code.stmt.aktif > 0) {
			code.stmt.getById(code.stmt.aktif).view.elHtml.classList.add('dipilih')
		}
	}

	get menu(): HTMLDivElement {
		return this.getEl('div.menu-cont') as HTMLDivElement;
	}

	get cont(): HTMLDivElement {
		return this.getEl('div.cont') as HTMLDivElement;
	}
	public get pilih(): PilihStatementDlg {
		return this._pilih;
	}
}