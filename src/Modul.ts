
import { code } from "./Code.js";
import { Tombol } from "./comp/Tombol.js";
import { IModul } from "./Interface.js";
import { ModulView } from "./ModulView.js";
import { State } from "./State.js";
import { Type } from "./Type.js";

export class Modul {
    private _list: IModul[] = [];   //bisa diisi func dan stmt

    constructor() {
    }

    getById(id: number): IModul {

        for (let i: number = 0; i < this._list.length; i++) {
            if (this._list[i].id == id)
                return this._list[i];
        }

        return null;
    }

    hapus(id: number): void {
        for (let i: number = 0; i < this._list.length; i++) {
            if (this._list[i].id == id) {
                this._list[i].el.detach();
                this._list.splice(i, 1);
            }
        }
    }

    getIdx(id: number): number {
        for (let i: number = 0; i < this._list.length; i++) {
            if (this._list[i].id == id)
                return i;
        }

        return -1;
    }

    // insert(modulDiInsert: IModul, modulParent: IModul, idxModulDipilih: number) {
    //     let idx: number = this.getIdx(idxModulDipilih);
    //     this._list.splice(idx, 0, modulDiInsert);
    //     this.renderSub(modulParent);
    // }

    renderModulView(modul: IModul): void {
        modul.el = new ModulView(modul.id);
        modul.el.nama.innerText = modul.nama;
    }

    getSub(modul: IModul): IModul[] {
        let hasil: IModul[] = [];

        this._list.forEach((item: IModul) => {
            if (item.induk == modul.id) {
                if (item.type == Type.TY_MODUL) {
                    hasil.push(item);
                }
            }
        });

        return hasil;
    }

    renderSub(modul: IModul): void {
        let sub: IModul[] = this.getSub(modul);

        sub.forEach((sub: IModul) => {
            sub.el.detach();
            sub.el.attach(modul.el.modulCont);
        });
    }

    tombolDipilih(modulDipilihid: number): HTMLButtonElement[] {
        let hasil: HTMLButtonElement[] = [];
        let modulInduk: IModul = this.getById(modulDipilihid);

        hasil.push(Tombol.buat('+ modul', () => {
            let nama: string = '';
            let modulBaru: IModul;

            nama = window.prompt('nama modul:');
            modulBaru = this.buat(nama, modulInduk.id);
            this._list.push(modulBaru);
            this.renderSub(modulInduk);

        }));

        hasil.push(Tombol.buat(' hapus ', () => {
            this.hapus(modulDipilihid);
        }));

        hasil.push(Tombol.buat(' + fungsi ', () => {
            //TODO: dialog function
        }));

        hasil.push(Tombol.buat(' + var ', () => {
            //TODO: dialog var baru
        }));

        hasil.push(Tombol.buat(' + stmt ', () => {
            //TODO: func call, control flow
        }));

        return hasil;
    }

    buat(nama: string, indukId: number): IModul {
        let modulBaru: IModul;

        console.debug('buat modul');

        modulBaru = {
            id: code.id.id,
            nama: nama,
            type: Type.TY_MODUL,
            induk: indukId,
            sub: [],
            readonly: false
        }

        this.renderModulView(modulBaru);

        modulBaru.el.elHtml.onclick = (e: MouseEvent) => {
            e.stopPropagation();
            if (code.state.aktif == State.ST_AWAL || (code.state.aktif == State.ST_MODUL_DIPILIH)) {
                console.debug('modul klik');

                document.body.querySelectorAll('div.modul').forEach((el: Element) => {
                    el.classList.remove('dipilih');
                });

                code.elAktif = modulBaru.id;
                code.state.aktif = State.ST_MODUL_DIPILIH;
                modulBaru.el.elHtml.classList.add('dipilih');
                code.menu.render2(this.tombolDipilih(modulBaru.id));
            }
            else {
                console.debug('modul di klik batal, state: ' + code.state.aktif);
            }
        }

        return modulBaru;
    }

    public get list(): IModul[] {
        return this._list;
    }

    public set list(value: IModul[]) {
        this._list = value;
    }

}
