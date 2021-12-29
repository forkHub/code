import { BaseComponent } from "./comp/BaseComponent.js";
import { ModulView } from "./ModulView.js";

export interface IStatement extends IEl {
	view?: IStmtView		//dep
	typeStmt: number;
	nama?: string;			//dep diganti placeholder
	kembali?: number;		//kembalian type
	stmts?: IStatement[]; 	//child
	komp?: IStmtKomp[];
	el?: HTMLElement;
	placeholders?: IPlaceHolder[]; //
}

export interface IPlaceHolder extends IEl {
	gantiNamaFlow?: () => void;	//dep
	refStmt?: number;			//auto
	el?: HTMLElement;			//auto
	typePh: number;
	value?: string;
}

export interface IStmtView extends BaseComponent {
	data: IStatement;
	updateView: () => void;
}

export interface IVarIsi extends IStatement {
	nama: string;
	value: string;
}

export interface IVarDek extends IStatement {
	nama: string;
}

export interface IStmtKomp extends IEl {
	el: HTMLElement;
	value: string;
	ref: number;
	kompType: number;
	phType: number;
}

export interface IEl {
	id: number;
	type: number;
	induk?: number;
}

export interface IModul extends IEl {
	nama: string;
	readonly?: boolean;
	sub?: IModul[];
	el?: ModulView;
	lipat?: boolean;
}

export interface IFuncDec extends IEl {
	nama: string;
	params: IFuncDec[];
	view: BaseComponent;
}

export interface IFuncParam extends IEl {
	nama: string
	type: number;
	view: BaseComponent;
}

export interface IFuncCall extends IEl {
	view: BaseComponent;
	funcId: number;
}