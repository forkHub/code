import { code } from "./Code.js";
import { BaseComponent } from "./comp/BaseComponent.js";
// import { Tombol } from "./comp/Tombol.js";
import { IModul } from "./Interface.js";
// import { State } from "./State.js";
import { Type } from "./Type.js";
import { VarDek } from "./stmt/VarDek.js";
import { PilihStatementDlg } from "./PilihStatementDlg.js";

//TODO: ganti
export class HalDepan extends BaseComponent {
	private readonly _pilih: PilihStatementDlg = new PilihStatementDlg();
	constructor() {
		super();

		console.debug('daftar statement constructor');

		this._template = `
			<div class='daftar-statement'>
				<div class='header'>
					<button class='menu'>|||</button>
				</div>
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
			// this.renderDaftar();
		}
	}

	init(): void {
		code.menu.cont = this.menu;
		this.pilih.init();
	}

	buatStatementFlow(): void {
		this.pilih.attach(document.body);
	}

	//TODO: dep
	renderDaftar(): void {

		let scroll: number = this.cont.scrollTop;

		this.cont.innerHTML = '';

		code.modul.list.forEach((el: IModul) => {
			el.el.elHtml.classList.remove('dipilih');
			el.el.attach(this.cont);
		});

		this.cont.scrollTo(0, scroll);

		if (code.elAktif > 0) {
			code.modul.getById(code.elAktif).el.elHtml.classList.add('dipilih')
		}
	}

	get tombolMenu(): HTMLButtonElement {
		return this.getEl('button.menu') as HTMLButtonElement;
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