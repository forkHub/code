import { BaseComponent } from "./comp/BaseComponent.js";

export class ModulView extends BaseComponent {
    private _modulId: number;
    public get modulId(): number {
        return this._modulId;
    }
    public set modulId(value: number) {
        this._modulId = value;
    }

    constructor(id: number) {
        super();
        this._template = `
            <div class='modul' id="${id}">
                <div class='nama'></div>
                <div class='modul-cont'></div>
                <div class='var-cont'></div>
                <div class='func-cont'></div>
            </div>
        `;
        this.build();
    }

    get id(): number {
        return parseInt(this._elHtml.getAttribute('id'));
    }

    get nama(): HTMLDivElement {
        return this.getEl('div.nama') as HTMLDivElement;
    }

    get modulCont(): HTMLDivElement {
        return this.getEl('div.modul-cont') as HTMLDivElement;
    }

}