import { LitElement, html, css } from 'lit-element';

class Weapons extends LitElement {
    static styles = css`
    .titlesWrapper{
        display: flex;
        flex-direction: row;
        margin-bottom: 0px;
    }
    .titles{
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 5px;
    }
    .damageWrapper {
        border: solid grey 1px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 5px;
        border-radius: 5px;
        width: 90px;
        flex-shrink: 0;
    }
    .weaponRow {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 5px 10px;
        height: auto;
        gap: 10px;
        background-color: lightgray;
    }
    .vahinkoTitle{
        padding-left: 30px;
    }
    .hbTitle{
        padding-left: 85px;
    }
    .propertiesTitle{
        padding-left: 50px;
    }
    .dmgTypeTextArea{
        font-size: 12px;
        color: #696969;
        font-family: "Roboto Condensed", sans-serif;
        border: none;
        background: none;
        align-items: center;
        justify-content: center;
        resize: none;
        width:100%;
        text-align: center;
        line-height: 15px;
        height:15px;
    }
    .hb {
        font-weight: bold;
        font-size: 20px;
        margin-left: 0px;
        flex-shrink: 0;
        }
    .propertiesTextArea {
        margin-left: 20px;
        flex-grow: 1;
        font-family: "Roboto Condensed", sans-serif;
        font-size: 17px;
        border: none;
        background: none;
        align-items: center;
        justify-content: center;
        resize: none;
        line-height: 20px;
        min-width: 10px;
        }
    .nameTextArea {
        width: 115px;
        font-family: "Roboto Condensed", sans-serif;
        font-size: 17px;
        border: none;
        background: none;
        resize: none;
        overflow: hidden;
        padding: 0;
        line-height: 20px;
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
    }
    .addWpnRow{
        display: flex;
        flex-direction: row;
        margin: 5px;
    }
    .weaponsDropDown{
        font-family: "Roboto Condensed", sans-serif;
        font-size: 15px;
        border: none;
        border-radius: 10px;
        padding: 10px;
    }
    .dropdownOption{
        color: black;
    }
    .weaponRow.even {
    background-color: lightgray;
    }

    .weaponRow.odd {
        background-color: white;
    }
    .desc{
        margin-left: 10px;
        border-left: solid lightgray 5px;
        padding: 5px;
    }
    .actionTitles{
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 5px;
        font-weight: bold;
    }
    .buttonWrapper{
        display:flex;
        flex-direction: column;
    }
    .hbWrapper{
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: left;
    }
    .hbButton{
        width: 30px;
        margin: 1px;
        margin-left: 10px;
        border:none;
    }
    .img{
        height: 20px;
        width: 20px;
    }
    .dmgTextArea{
        flex-wrap: wrap;
        width: 100%;
        flex-shrink: 0;
        font-family: "Roboto Condensed", sans-serif;
        font-size: 17px;
        border: none;
        background: none;
        align-items: center;
        justify-content: center;
        resize: none;
        line-height: 20px;
        height:20px;
        text-align: center;
        overflow: hidden;
        }
    `;

    staticProperties = {
        simpleMeleeWeapons: { type: Array },
        addedWeapons: { type: Array },
        weaponlessHB: {type: Number},
        hb: {type: Number}
    }

    static get properties() {
        return {
            weapons: { type: Array },
            addedWeapons: { type: Array }
        }
    }

    constructor() {
        super();
        this.weapons = [];
        this.addedWeapons =  JSON.parse(localStorage.getItem('weapons') || '[]');;

    }

    async connectedCallback() {
        super.connectedCallback();
        this._onResize = this.resizeAllTextareas.bind(this);
        window.addEventListener('resize', this._onResize);
        await this.loadCSV();
    }

    async loadCSV() {
        const response = await fetch("data/weapons.csv")
        const csvText = await response.text();

        const result = Papa.parse(csvText, {
            header: true,
            skipEmptyLines: true
        });
        this.weapons = result.data;
        console.log(this.weapons)
    }

    firstUpdated() {
    this.resizeAllTextareas();
    this.shadowRoot.addEventListener('input', event => {
        if (event.target.tagName === 'TEXTAREA') {
        this.resizeTextarea(event.target);
        }
    });
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

    handleAddWeapon() {
        const dropdown = this.shadowRoot.getElementById('weapons');
        const selectedName = dropdown.value;

        if (selectedName === 'default') return;

        const selectedWeapon = this.weapons.find(w => w.Nimi === selectedName);

        if (selectedWeapon) {
            const weaponWithHB = { ...selectedWeapon, hbBonus: 0 };
            this.addedWeapons = [...this.addedWeapons, weaponWithHB];
        }
        localStorage.setItem('weapons', JSON.stringify(this.addedWeapons));
        this.resizeAllTextareas();
    }

    incrementHB(index) {
        const updated = [...this.addedWeapons];
        updated[index].hbBonus += 1;
        this.addedWeapons = updated;
        localStorage.setItem('weapons', JSON.stringify(this.addedWeapons));
    }

    decrementHB(index) {
        const updated = [...this.addedWeapons];
        updated[index].hbBonus -= 1;
        this.addedWeapons = updated;
        localStorage.setItem('weapons', JSON.stringify(this.addedWeapons));
    }
    
    onStatBlur(e, index, statKey) {
        const updated = [...this.addedWeapons];
        updated[index] = { ...updated[index], [statKey]: e.target.value };
        this.addedWeapons = updated;
        localStorage.setItem('weapons', JSON.stringify(this.addedWeapons));
        }

    deleteWeapon(name){
        const array = [...this.addedWeapons];
        const updated = array.filter(weapon => weapon.Nimi !== name)
        this.addedWeapons = updated;
        localStorage.setItem('weapons', JSON.stringify(this.addedWeapons));
    }

    render() {
        return html`
            <div class="titlesWrapper">
                <p class="titles">ASE</p>
                <p class="titles hbTitle">HB</p>
                <p class="titles vahinkoTitle">VAHINKO</p>
                <p class="titles propertiesTitle">OMINAISUUDET</p>
            </div>
            <div>
                ${this.addedWeapons.map((weapon, i) => html`
                <div class="weaponRow ${i % 2 === 0 ? 'even' : 'odd'}">
                    <textarea type="text" class="nameTextArea" spellcheck="false" .value="${weapon.Nimi}" @blur="${e => this.onStatBlur(e, i, 'Nimi')}"></textarea>
                    <span class="hbWrapper">
                        <span class="hb">${weapon.hbBonus >= 0 ? '+' : ''}${weapon.hbBonus}</span>
                        <span class="buttonWrapper">
                            <button class="hbButton" @click="${() => this.incrementHB(i)}">+</button>
                            <button class="hbButton" @click="${() => this.decrementHB(i)}">-</button>
                        </span>
                    </span>
                    <span class="damageWrapper">
                    <textarea type="text" class="dmgTextArea" spellcheck="false" .value="${weapon.Vahinko}" @blur="${e => this.onStatBlur(e, i, 'Vahinko')}"></textarea>
                    <textarea class="dmgTypeTextArea" spellcheck="false" .value="${weapon.Vahinkotyyppi}" @blur="${e => this.onStatBlur(e, i, 'Vahinkotyyppi')}"></textarea>
                    </span>
                    <textarea class="propertiesTextArea" spellcheck="false" .value="${weapon.Ominaisuudet}" @blur="${e => this.onStatBlur(e, i, 'Ominaisuudet')}"></textarea>
                    <span class="options">
                        <img src="../icons/trash.png" class="img" @click="${() => this.deleteWeapon(weapon.Nimi)}">
                    </span>
                </div>
                `)}
                </div>  
            <div class="addWpnRow">
                <select class="weaponsDropDown" id="weapons">
                    <option value="default" disabled selected>Lisää ase</option>
                    ${this.weapons.map(
                        weapon => html`<option class="dropdownOption" value="${weapon.Nimi}">${weapon.Nimi}</option>`
                    )}
                </select>
                <button type="button" @click="${this.handleAddWeapon}" class="addBtn">+</button>
            </div>
            <div>
                <p class="actionTitles">TOIMINNOT TAISTELUSSA</p>
                <p class="desc">Hyökkäys, Loitsiminen, Ryntäys, Irtaudu, Väistä, Auta, Piiloudu, Valmistaudu, Etsi, Käytä esinettä</p>
                <p class="actionTitles">REAKTIO</p>
                <p class="desc">Hahmolla on reaktiona yksi vapaahyökkäys per kierros</p>
            </div>
        `;
    }
}
customElements.define('weapons-element', Weapons);