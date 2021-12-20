import { BaseComponent } from "./comp/BaseComponent.js";

export interface IStatement {
	view: IStmtView
	id: number;
	type: number;
	nama?: string;
	kembali?: number;	//kembalian type
	stmts?: IStatement[];
	placeholders?: IPlaceHolder[];
}

export interface IPlaceHolder {
	gantiNamaFlow?: () => void;
	refStmt: number;
	el: HTMLElement;
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