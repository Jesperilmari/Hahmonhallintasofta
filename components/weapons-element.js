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
    }
    .vahinko{
        padding-left: 75px;
    }
    .hbTitle{
        padding-left: 40px;
    }
    .dmgType{
        font-size: 12px;
        color: #696969;
    }
    .hb {
    font-weight: bold;
    font-size: 20px;
    margin-left: 20px;
    flex-shrink: 0;
    }
    .properties {
    margin-left: 20px;
    flex-grow: 1;
    }
    .name {
    display: flex;
    flex-wrap: wrap;
    width: 120px;
    flex-shrink: 0;
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
    `;

    staticProperties = {
        simpleMeleeWeapons: { type: Array },
        addedWeapons: { type: Array }
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
        this.addedWeapons = [];

    }

    async connectedCallback() {
        super.connectedCallback();
        await this.loadCSV();
    }

    async loadCSV() {
        const response = await fetch("data/simpleMeleeWeapons.csv")
        const csvText = await response.text();

        const result = Papa.parse(csvText, {
            header: true,
            skipEmptyLines: true
        });
        this.weapons = result.data;
        console.log(this.weapons)
    }

    firstUpdated() {
    }

    handleAddWeapon() {
        const dropdown = this.shadowRoot.getElementById('weapons');
        const selectedName = dropdown.value;

        if (selectedName === 'default') return;

        const selectedWeapon = this.weapons.find(w => w.Nimi === selectedName);

        if (selectedWeapon) {
            this.addedWeapons = [...this.addedWeapons, selectedWeapon];
        }
    }

    render() {
        return html`
            <div class="titlesWrapper">
                <p class="titles">ASE</p>
                <p class="titles vahinko">VAHINKO</p>
                <p class="titles hbTitle">HB</p>
                <p class="titles">OMINAISUUDET</p>
            </div>
            <div class="weaponRow">
                <span class="name">
                Aseeton hyökkäys
                </span>
                <span class="damageWrapper">  
                    <span>1</span>
                    <span class="dmgType">-</span>
                </span>
                <span class="hb">+0</span>
                <span class="properties">Hahmolla on automaattisesti pätevyys aseettomiin hyökkäyksiin</span>
            </div>
            <div>
                ${this.addedWeapons.map((weapon, i) => html`
                <div class="weaponRow ${i % 2 === 0 ? 'even' : 'odd'}">
                    <span class="name">${weapon.Nimi}</span>
                    <span class="damageWrapper">
                    <span>${weapon.Vahinko}</span>
                    <span class="dmgType">${weapon.Vahinkotyyppi}</span>
                    </span>
                    <span class="hb">${weapon.HB}</span>
                    <span class="properties">${weapon.Ominaisuudet}</span>
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
                <p class="desc">Hahmolla on yksi vapaahyökkäys per kierros</p>
            </div>
        `;
    }
}
customElements.define('weapons-element', Weapons);