import { code } from "./Code.js";
import { BaseComponent } from "./comp/BaseComponent.js";
import { Type } from "./Type.js";

export class PilihStatementDlg extends BaseComponent {
	private _selesai: (type: number) => void;
	public get selesai(): (type: number) => void {
		return this._selesai;
	}
	public set selesai(value: (type: number) => void) {
		this._selesai = value;
	}

	constructor() {
		super();
		this._template = `
			<div class='pilih-stmt'>
				<div class='kotak-dlg padding'>
					<div class='text-align-right'>
						<button class='tutup padding'>x</button>
					</div>
					<h3>pilih statement</h3>
					<div class='cont'>
						
					</div>
				</div>
			</div>
			`;
		this.build();

		this.tutupTbl.onclick = (e: MouseEvent) => {
			e.stopPropagation();
			this.detach();
		}

		this._elHtml.onclick = (e: MouseEvent) => {
			e.stopPropagation();
			this.detach();
		}

	}

	init(): void {
		this.renderDaftar();
	}

	renderDaftar(): void {
		Type.daftar.forEach((item: number) => {
			let el: BaseComponent = code.stmt.viewByType(item);
			el.attach(this.daftarIsi);
			el.elHtml.onclick = (e: MouseEvent) => {
				e.stopPropagation();
				this.detach();
				this._selesai(item);
			}
		});
	}

	get tutupTbl(): HTMLButtonElement {
		return this.getEl('button.tutup') as HTMLButtonElement;
	}

	get daftarIsi(): HTMLDivElement {
		return this.getEl('div.cont') as HTMLDivElement;
	}
}