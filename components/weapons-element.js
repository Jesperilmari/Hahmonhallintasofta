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
    .dmgType{
        font-size: 12px;
        color: #696969;
    }
    .hb {
    font-weight: bold;
    font-size: 20px;
    margin-left: 0px;
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
        this.addedWeapons = [];

    }

    async connectedCallback() {
        super.connectedCallback();
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
    }

    incrementHB(index) {
    const updated = [...this.addedWeapons];
    updated[index].hbBonus += 1;
    this.addedWeapons = updated;
    }

    decrementHB(index) {
        const updated = [...this.addedWeapons];
        updated[index].hbBonus -= 1;
        this.addedWeapons = updated;
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
                    <span class="name">${weapon.Nimi}</span>
                    <span class="hbWrapper">
                        <span class="hb">${weapon.hbBonus >= 0 ? '+' : ''}${weapon.hbBonus}</span>
                        <span class="buttonWrapper">
                            <button class="hbButton" @click="${() => this.incrementHB(i)}">+</button>
                            <button class="hbButton" @click="${() => this.decrementHB(i)}">-</button>
                        </span>
                    </span>
                    <span class="damageWrapper">
                    <span>${weapon.Vahinko}</span>
                    <span class="dmgType">${weapon.Vahinkotyyppi}</span>
                    </span>
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
                <p class="actionTitles">ASEIDEN OMINAISUUDET</p>
                <p class="titles">Ammukset</p>
                <p class="desc">Ase, jolla on ominaisuus “ammukset”, kuluttaa sille tarkoitettuja ammuksia (nuolia, vasamia, kiviä) hyökkäyksissä. Et voi hyökätä tällaisella aseella normaalisti, jos ammukset ovat loppuneet. Taistelun lopuksi voit keräillä puolet käytetyistä ammuksista, jos sinulla on vähintään minuutti aikaa tutkia taistelukenttää. Jos käytät tällaista asetta lähitaisteluhyökkäykseen, se toimii improvisoituna aseena (kts. kohta “improvisoidut aseet” myöhemmin). Lingossa täytyy olla lingon kivi paikallaan, jotta se toimii lähitaisteluaseena.</p>
                <p class="titles">Tarkkuus</p>
                <p class="desc">Tällaisella aseella voi osua tarkasti tiettyyn kohteeseen ja aseen käyttäminen voi vaatia tarkkaa taitoa. Kun hyökkäät aseella, jolla on ominaisuus “tarkkuus”, voit valita käytätkö voimakkuus- tai ketteryysmuuttujaasi hyökkäys- ja vahinkoheittoihin.</p>
                <p class="titles">Raskas ase</p>
                <p class="desc">Pienet olennot saavat haitan hyökkäysheittoihin raskailla aseilla.</p>
                <p class="titles">Kevyt ase</p>
                <p class="desc">Kevyet aseet ovat pieniä ja helppoja hallita. Ne ovat ideaaleja kahdella aseella taistelemiseen.</p>
                <p class="titles">Ladattava</p>
                <p class="desc">Voit tehdä ladattavalla aseella vain yhden hyökkäyksen toimintona, bonustoimintona tai reaktiona, vaikka voisitkin muuten hyökätä useammin saman toiminnon aikana.</p>
                <p class="titles">Kantama</p>
                <p class="desc">Aseen kantama ilmoitetaan kahdella luvulla. Ensimmäinen luku on normaalikantama metreinä ja toinen luku on pitkä kantama. Kun hyökkäät aseella normaalikantamaa pidemmälle matkalle, saat haitan hyökkäysheittoon.</p>
                <p class="titles">Ulottuva</p>
                <p class="desc">Voit hyökätä korkeintaan neljän metrin päähän aseella, jolla on ominaisuus ulottuva. Tämä koskee myös vapaahyökkäyksiä. Erikoispiirre. Näiden aseiden ominaisuudet on selitetty niiden omassa osiossaan Erikoispiirteiset aseet.</p>
                <p class="titles">Heitettävä</p>
                <p class="desc">Voit tehdä kantamahyökkäyksen aseella, jolla on ominaisuus heitettävä. Jos kyseessä on lähitaisteluase, käytä samaa ominaisuutta hyökkäys- ja vahinkoheittoihin kuin käyttäisit lähitaisteluhyökkäyksissäkin. Kirveen heittämiseen käytetään siis voimakkuutta ja tikarin heittämiseen joko ketteryyttä tai voimakkuutta, koska kyseessä on ase, jolla on ominaisuus “tarkkuus”.</p>
                <p class="titles">Kahden käden ase</p>
                <p class="desc">Tällaista asetta pitää käyttää hyökätessä kahdella kädellä.</p>
                <p class="titles">Yhden tai kahden käden ase</p>
                <p class="desc">Tätä asetta voi käyttää yhdellä tai kahdella kädellä. Kahdella kädellä käytettäessä vahinkoa tulee tämän ominaisuuden perässä olevan arvon verran.</p>
                <p class="actionTitles">IMPROVISOIDUT ASEET</p>
                <p class="desc">Joskus seikkailuissa tulee tilanne, jolloin hahmoilla ei ole käytössään omia aseitaan ja täytyy käyttää, mitä käteen sattuu sillä hetkellä. Improvisoituja aseita voivat olla pöydänjalat, paistinpannut, rikkoutuneet pullot tai vaikka peikkolaisten ruumiit. Joskus improvisoitu ase on tarpeeksi lähellä oikeaa asetta, että se voidaan laskea vastaavaksi oikeaksi aseeksi (esimerkiksi pöydänjalka on lähellä nuijaa). Pelinjohtajan hyväksynnällä hahmo voi käyttää oikean aseen pätevyysbonusta improvisoidullakin aseella. Esine, joka ei muistuta mitään asetta, tekee 1n4 vahinkoa ja pelinjohtaja voi määrittää vahinkotyypin. Jos hahmo käyttää kantama-asetta lähitaisteluaseena tai jos hahmo heittää lähitaisteluaseen, jolla ei ole ominaisutta heitettävä, tekee ase 1n4 vahinkoa. Improvisoidun heitetyn aseen kantama on (8/24).</p>
                <p class="actionTitles">HOPEOIDUT ASEET</p>
                <p class="desc">Jotkut olennot ovat immuuneja tai sietokykyisiä normaalien aseiden vahinkoa vastaan. Ne saattavat kuitenkin olla alttiita hopeisten aseiden vahingolle. Aseen tai kymmenen ammusta voi päällystää hopealla 100 kultarahan hintaan. Tämä hinta kattaa materiaalien lisäksi sepän työn.</p>
            </div>
        `;
    }
}
customElements.define('weapons-element', Weapons);