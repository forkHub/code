import { code } from "../Code.js";
import { BaseComponent } from "../comp/BaseComponent.js";
import { IPlaceHolder, IStatement, IStmtKomp, IStmtView, IVarDek } from "../Interface.js";
import { State } from "../State.js";
import { Type } from "../Type.js";
import { PlaceHolder } from "./PlaceHolder.js";

export class VarDek implements IVarDek {
	private _nama: string;
	private _id: number;
	private _view: IStmtView;
	private _type: number;
	private readonly _placeHolders: IPlaceHolder[] = [];

	//TODO
	induk: number;
	type: number;
	kembali?: number;
	stmts?: IStatement[];
	komp?: IStmtKomp[];
	placeholders?: IPlaceHolder[];

	constructor() {
		this._id = code.id.id;
		this._view = new VarDecView();
		this._type = Type.STMT_VAR_ISI;
		this._view.data = this;

		this._placeHolders.push(new PlaceHolder(Type.PH_NAMA, (this._view as VarDecView).namaTbl, this._id));

		this._view.elHtml.onclick = (e: MouseEvent) => {
			e.stopPropagation();
			if (this.stateBisaDiKlik()) {
				console.debug('klik element, id: ' + this.id);
				code.stmt.aktif = this.id;
				code.state.aktif = State.ST_STMT_DIPILIH;
				code.menu.render();

				//update view
				document.body.querySelectorAll('div.stmt').forEach((e: Element) => {
					e.classList.remove('dipilih');
				});

				//update view place holder
				document.body.querySelectorAll('div.placeholder').forEach((e: Element) => {
					e.classList.remove('dipilih');
				})
				// code.placeholderDipilih = null;

				this._view.elHtml.classList.add('dipilih');
			}
		}
	}

	stateBisaDiKlik(): boolean {
		if (State.ST_AWAL == code.state.aktif) return true;
		if (State.ST_STMT_DIPILIH == code.state.aktif) return true;
		if (State.ST_STMT_EDIT == code.state.aktif) return true;
		if (State.ST_PLACEHOLDER_DIPILIH == code.state.aktif) return true;
		if (State.ST_PILIH_TYPE_PLACEHOLDER == code.state.aktif) return true;

		console.debug('klik stmt gagal, state: ' + code.state.aktif);

		return false;
	}

	validasi(): boolean {
		return (code.env.validasi(this._nama, this.id));
	}

	public get placeHolders(): IPlaceHolder[] {
		return this._placeHolders;
	}

	public get typeStmt(): number {
		return this._type;
	}
	public get id(): number {
		return this._id;
	}
	public set id(value: number) {
		this._id = value;
	}

	public get view(): IStmtView {
		return this._view;
	}

	public get nama(): string {
		return this._nama;
	}
	public set nama(value: string) {
		this._nama = value;
	}
}

export class VarDecView extends BaseComponent implements IStmtView {
	private _type: string;
	private _data: VarDek;

	public get data(): VarDek {
		return this._data;
	}
	public set data(value: VarDek) {
		this._data = value;
	}

	public get type(): string {
		return this._type;
	}

	constructor() {
		super();
		this._type = '';

		this._template = `
			<div class='var-dec stmt'>
				<div class='content'>
					<span class=''>
						var 
						<div class='nama placeholder'>
							<span class='nama'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
						</div>
					</span>
				</div>
			</div>
		`;
		this.build();

	}

	updateView() {
		this.namaSpan.innerText = this._data.nama;
	}

	get namaTbl(): HTMLDivElement {
		return this.getEl('div.placeholder.nama') as HTMLDivElement;
	}

	get namaSpan(): HTMLSpanElement {
		return this.getEl('span.nama') as HTMLSpanElement;
	}
}