
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

    insert(modulDiInsert: IModul, modulParent: IModul, idxModulDipilih: number) {

        // modulDiInsert;
        // idDipilih;
        // cont;

        let idx: number = this.getIdx(idxModulDipilih);
        this._list.splice(idx, 0, modulDiInsert);

        this.renderSub(modulParent);

        // this._list.splice(idDipilih, 0, modul);

        // let elNext: HTMLElement;
        // let modulDipilih: IModul = this.getById(idDipilih);

        // if (modulDipilih) {
        //     elNext = modulDipilih.el.elHtml.nextSibling as HTMLElement;
        // }

        // cont.insertBefore(modul.el.elHtml, elNext);

        // this._list.splice(idDipilih, 0, modul);

        // console.debug('insert modul, idDipilih: ' + idDipilih + "/idx: " + this.getIdx(modul.id));
        // console.debug(modul.el.elHtml.parentNode.children[this.getIdx(modul.id)]);
        // console.debug(modul.el.elHtml);
    }

    renderModulView(modul: IModul): void {
        modul.el = new ModulView(modul.id);
        modul.el.nama.innerText = modul.nama;
    }

    renderSub(modul: IModul): void {
        modul.el.modulCont.innerHTML = '';
        modul.sub.forEach((sub: IModul) => {
            sub.el.attach(modul.el.modulCont);
        });
    }

    tombolDipilih(modulDipilihid: number): HTMLButtonElement[] {
        let hasil: HTMLButtonElement[] = [];
        let modulInduk: IModul = this.getById(modulDipilihid);

        hasil.push(Tombol.buat('+ modul', () => {
            let nama: string = '';
            let modulBaru: IModul;

            // modulBaru = {
            //     id: code.id.id,
            //     nama: nama,
            //     type: Type.TY_MODUL,
            //     induk: modulInduk.id
            // }

            nama = window.prompt('nama modul:');
            modulBaru = this.buat(nama, modulInduk.id);

            // this.renderModulView(modulBaru);

            // this.insert(modulBaru, modulInduk.id, code.halDaftarStatement.cont);

            // modulBaru.el.elHtml.onclick = () => {
            //     if (code.state.aktif == State.ST_AWAL || (code.state.aktif == State.ST_MODUL_DIPILIH)) {
            //         document.body.querySelectorAll('div.modul').forEach((el: Element) => {
            //             el.classList.remove('dipilih');
            //         });

            //         code.elAktif = modulBaru.id;
            //         code.state.aktif = State.ST_MODUL_DIPILIH;
            //         modulBaru.el.elHtml.classList.add('dipilih');
            //         code.menu.render2(this.tombolDipilih(modulBaru.id));
            //     }
            //     else {
            //         console.debug('modul di klik batal, state: ' + code.state.aktif);
            //     }
            // }
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
