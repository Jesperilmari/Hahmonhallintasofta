import { LitElement, html, css } from 'lit';
export class RaceNbg extends LitElement {
    static styles = css`
    .wrapper{
        display: flex;
        flex-direction: column;
        font-family: "Roboto Condensed", sans-serif;
        margin-bottom: 10px;
    }
    .label{
        margin: 10px;
    }
    .title{
        margin: 10px;
        margin-bottom: 0px;
        font-weight: bold;
    }
    .secondaryTitle{
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 5px;
    }
    .field{
        margin-left: 5px;
        flex-grow: 1;
        font-family: "Roboto Condensed", sans-serif;
        font-size: 17px;
        border: none;
        background: none;
        align-items: center;
        justify-content: center;
        resize: none;
        min-width: 10px;
        box-sizing: border-box;
        width: 75%;
        border-bottom: solid 1px;
        line-height: 20px;
        padding-left: 5px;
    }
    .addBtn{
        border: none;
        border-radius: 20px;
        padding: 0;
        margin: 0;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25px;
        height: 25px;
        vertical-align: middle;
        padding-bottom: 4px;
        padding-left: 1px;
        margin: 5px;
        margin-left: 10px;
    }
    .traitFormWrapper{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: white;
        color: black;
        padding: 0.5rem;
        text-align: left;
        z-index: 9999;
        border-top: solid lightblue 2px;
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: left;
        box-sizing: border-box
    }
    .textbox{
        font-family: "Roboto Condensed", sans-serif;
        width: 98%;
        height: auto;
        resize: none;
        margin-right: 10px;
    }
    .nimi{
        max-width: 500px;
        min-width: 100px;
    }
    .formTitle{
        font-weight: bold;
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
    }
    .formAddBtn{
        font-family: "Roboto Condensed", sans-serif;
        font-size: 15px;
        font-weight: bold;
        color: black;
        margin-top: 5px;
        border: none;
        border-radius: 5px;
        padding: 5px;
        width: 150px;
    }
    .closeBtn{
        border: none;
        border-radius: 20px;
        padding: 0;
        margin: 0;
        font-size: 15px;
        font-weight:bold;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25px;
        height: 25px;
        vertical-align: middle;
        padding-bottom: 2px;
        padding-left: 1px;
        display: flex;
        justify-self: end;
    }
    .desc{
        margin-left: 10px;
        border-left: solid lightgray 5px;
        padding: 5px;
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
        width: 100%;
    }
    .img{
        height: 20px;
        width: 20px;
        justify-self: end;
        padding-right: 10px;
    }
    .traitRow{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    `

    constructor() {
        super();
        this.showAddTrait = false;
        this.showAddSpeciality = false;
        this.traits = JSON.parse(localStorage.getItem('traits') || '[]');
        this.specialities = JSON.parse(localStorage.getItem('specialities') || '[]');
        this.generalInfo = JSON.parse(localStorage.getItem('generalInfo') || '{}');
        this.background = JSON.parse(localStorage.getItem('background') || '{}');
    }

    static get properties() {
        return {
            showAddTrait: { type: Boolean },
            showAddSpeciality: { type: Boolean},
            traits: { type: Array },
            specialities: { type: Array },
            generalInfo: { type: Object },
            background: { type: Object },
        }
    }

    firstUpdated() {
        this.resizeAllTextareas();
        this.shadowRoot.addEventListener('input', event => {
            if (event.target.tagName === 'TEXTAREA') {
                this.resizeTextarea(event.target);
            }
        });
    }

    handleShowAddTrait() {
        this.showAddTrait = true;
    }

    handleShowAddSpeciality() {
        this.showAddSpeciality = true;
    }

    closeAddTrait() {
        this.showAddTrait = false;
    }

    closeAddSpeciality() {
        this.showAddSpeciality = false;
    }

    addTrait() {
        const name = this.renderRoot.querySelector('#traitName')?.value ?? '';
        const desc = this.renderRoot.querySelector('#traitDesc')?.value ?? '';
        this.traits = [...this.traits, { traitName: name, traitDesc: desc }];
        localStorage.setItem('traits', JSON.stringify(this.traits));
        this.showAddTrait = false;
    }

    addSpeciality() {
        const name = this.renderRoot.querySelector('#specialityName')?.value ?? '';
        const desc = this.renderRoot.querySelector('#specialityDesc')?.value ?? '';
        this.specialities = [...this.specialities, { specialityName: name, specialityDesc: desc }];
        localStorage.setItem('specialities', JSON.stringify(this.specialities));
        this.showAddSpeciality = false;
    }

    deleteTrait(name) {
        const array = [...this.traits];
        const updated = array.filter(trait => trait.traitName !== name)
        this.traits = updated
        localStorage.setItem('traits', JSON.stringify(this.traits))
    }

    deleteSpeciality(name) {
        const array = [...this.specialities];
        const updated = array.filter(speciality => speciality.specialityName !== name)
        this.specialities = updated
        localStorage.setItem('specialities', JSON.stringify(this.specialities))
    }

    resizeAllTextareas() {
        const textareas = this.renderRoot.querySelectorAll('textarea');
        for (const textarea of textareas) {
            this.resizeTextarea(textarea);
        }
    }

    resizeTextarea(textarea) {
        textarea.style.height = 'auto';
        const lineHeight = parseInt(window.getComputedStyle(textarea).lineHeight);
        textarea.style.height = lineHeight + 'px';
        if (textarea.scrollHeight > lineHeight) {
            textarea.style.height = textarea.scrollHeight + 'px';
        }
    }

    onGeneralInfoBlur(id, value) {
        this.generalInfo = {
            ...this.generalInfo,
            [id]: value
        };
        localStorage.setItem('generalInfo', JSON.stringify(this.generalInfo));
    }

    onBackgroundBlur(id, value) {
        this.background = {
            ...this.background,
            [id]: value
        };
        localStorage.setItem('background', JSON.stringify(this.background));
    }

    render() {
        return html`
            <section class="wrapper">
                <p class="title">YLEISTIETO</p>
                <label for="name" class="label">Nimi</label>
                <textarea id="name" class="field" spellcheck="false" @blur="${e => this.onGeneralInfoBlur(e.target.id, e.target.value)}" .value="${this.generalInfo.name || ''}"></textarea>
                <label for="alignment" class="label">Vakaumus</label>
                <textarea id="alignment" class="field" spellcheck="false" @blur="${e => this.onGeneralInfoBlur(e.target.id, e.target.value)}" .value="${this.generalInfo.alignment || ''}"></textarea>
                <label for="race" class="label">Laji</label>
                <textarea id="race" class="field" spellcheck="false" @blur="${e => this.onGeneralInfoBlur(e.target.id, e.target.value)}" .value="${this.generalInfo.race || ''}"></textarea>
            </section>
            <section>
                <p class="title">LAJIN PIIRTEET</p>
                <div>
                    ${this.traits.map((trait) => html`
                        <p class="secondaryTitle">${trait.traitName}</p>
                        <div class="traitRow">
                            <p class="desc">${trait.traitDesc}</p>
                            <img src="../icons/trash.png" class="img" @click="${() => this.deleteTrait(trait.traitName)}">
                        </div>
                    `)}
                </div>
                <button type="button" @click="${this.handleShowAddTrait}" class="addBtn">+</button>
            </section>
            <section class="wrapper">
                <p class="title">TAUSTA</p>
                <textarea id="tausta" class="field" spellcheck="false" @blur="${e => this.onBackgroundBlur(e.target.id, e.target.value)}" .value="${this.background.tausta || ''}"></textarea>
                <p class="title">ERIKOISUUS</p>
                <div>
                    ${this.specialities.map((speciality) => html`
                        <p class="secondaryTitle">${speciality.specialityName}</p>
                        <div class="traitRow">
                            <p class="desc">${speciality.specialityDesc}</p>
                            <img src="../icons/trash.png" class="img" @click="${() => this.deleteSpeciality(speciality.specialityName)}">
                        </div>
                    `)}
                </div>
                <button type="button" @click="${this.handleShowAddSpeciality}" class="addBtn">+</button>
                <label for="luonne" class="label">Luonteenpiirre</label>
                <textarea id="luonne" class="field" spellcheck="false" @blur="${e => this.onBackgroundBlur(e.target.id, e.target.value)}" .value="${this.background.luonne || ''}"></textarea>
                <label for="ihanne" class="label">Ihanne</label>
                <textarea id="ihanne" class="field" spellcheck="false" @blur="${e => this.onBackgroundBlur(e.target.id, e.target.value)}" .value="${this.background.ihanne || ''}"></textarea>
                <label for="side" class="label">Side</label>
                <textarea id="side" class="field" spellcheck="false" @blur="${e => this.onBackgroundBlur(e.target.id, e.target.value)}" .value="${this.background.side || ''}"></textarea>
                <label for="heikkous" class="label">Heikkous</label>
                <textarea id="heikkous" class="field" spellcheck="false" @blur="${e => this.onBackgroundBlur(e.target.id, e.target.value)}" .value="${this.background.heikkous || ''}"></textarea>
                <label for="muuta" class="label">Muuta</label>
                <textarea id="muuta" class="field" spellcheck="false" @blur="${e => this.onBackgroundBlur(e.target.id, e.target.value)}" .value="${this.background.muuta || ''}"></textarea>
            </section>
            <section class="wrapper">
                <p class="title">ULKONÄKÖ</p>
                <label for="ikä" class="label">Ikä</label>
                <textarea type="text" id="ikä" class="field"></textarea>
                <label for="pituus" class="label">Pituus</label>
                <textarea type="text" id="pituus" class="field"></textarea>
                <label for="paino" class="label">Paino</label>
                <textarea type="text" id="paino" class="field"></textarea>
                <label for="silmät" class="label">Silmät</label>
                <textarea type="text" id="silmät" class="field"></textarea>
                <label for="hiukset" class="label">Hiukset</label>
                <textarea type="text" id="hiukset" class="field"></textarea>
                <label for="iho" class="label">Iho</label>
                <textarea type="text" id="iho" class="field"></textarea>
                <label for="tuntomerkit" class="label">Tuntomerkit</label>
                <textarea type="text" id="tuntomerkit" class="field"></textarea>
                <label for="vaatetus" class="label">Vaatetus</label>
                <textarea type="text" id="vaatetus" class="field"></textarea>
                <label for="muuta" class="label">Muuta</label>
                <textarea type="text" id="muuta" class="field"></textarea>
            </section>
            ${this.showAddTrait ? html`
            <div class="traitFormWrapper">
                <div class="formTitle">
                <div>LISÄÄ PIIRRE</div>
                <button class="closeBtn" @click="${this.closeAddTrait}">X</button>
                </div>
                <div>PIIRTEEN NIMI</div>
                <div class="nimi"><textarea class="textbox" id="traitName"></textarea></div>
                <div>PIIRTEEN KUVAUS</div>
                <div class="traitDesc"><textarea class="textbox" id="traitDesc"></textarea></div>
                <button type="button" class="formAddBtn" @click="${this.addTrait}">LISÄÄ</button>
            </div>
            ` : ''}

            ${this.showAddSpeciality ? html`
            <div class="traitFormWrapper">
                <div class="formTitle">
                <div>LISÄÄ ERIKOISUUS</div>
                <button class="closeBtn" @click="${this.closeAddSpeciality}">X</button>
                </div>
                <div>ERIKOISUUDEN NIMI</div>
                <div class="nimi"><textarea class="textbox" id="specialityName"></textarea></div>
                <div>ERIKOISUUDEN KUVAUS</div>
                <div class="traitDesc"><textarea class="textbox" id="specialityDesc"></textarea></div>
                <button type="button" class="formAddBtn" @click="${this.addSpeciality}">LISÄÄ</button>
            </div>
            ` : ''}
        `;
    }
}
customElements.define('racenbg-element', RaceNbg);