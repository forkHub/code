export class Type {

	//statement tidak dipakai
	public static readonly STMT_VAR_ISI: number = 100;
	public static readonly STMT_VAR_DEC: number = 200; //tidak dipakai
	public static readonly STMT_FUNC: number = 300;

	//comp
	public static readonly STMT_KOMP_TEKS: number = 100;
	public static readonly STMT_KOMP_PLACEHOLDER: number = 200;

	//var
	public static readonly VAR_TY_ANGKA: number = 100;
	public static readonly VAR_TY_TEKS: number = 200;
	public static readonly VAR_TY_BUNDEL: number = 300;

	//placeholder
	public static readonly PH_NAMA: number = 100;
	public static readonly PH_EXP: number = 200;
	public static readonly PH_PARAM: number = 300;

	//el
	public static readonly TY_MODUL: number = 100;
	public static readonly TY_STMT: number = 200;
	public static readonly TY_EXP: number = 300;
	public static readonly TY_PH: number = 400;


	public static daftar: number[] = [
		Type.STMT_VAR_ISI
	]
}

