import { BaseComponent } from "./comp/BaseComponent.js";

export interface IStatement {
	id: number;
	type: number;
	view: IStmtView
	typeStmt: number;
	nama?: string;
	kembali?: number;	//kembalian type
	stmts?: IStatement[]; //child
	komp?: IStmtKomp[];
	placeholders?: IPlaceHolder[]; //
}

export interface IPlaceHolder {
	gantiNamaFlow?: () => void;
	refStmt: number;
	el: HTMLElement;
	type: number;
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

export interface IStmtKomp {
	id: number;
	type: number;
	el: HTMLElement;
	value: string;
	ref: number;
	phType: number;
}

export interface IBaris {
	id: number;
	type: number;
}