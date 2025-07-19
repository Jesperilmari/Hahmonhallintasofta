import { LitElement, html, css } from 'lit';

export class WeaponsView extends LitElement {
    static styles = css`
        .background{
            width:75%;
            margin-left:12.5%;
            background-color: white;
            font-family: "Roboto Condensed", sans-serif;
        }
        .actionTitles{
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 5px;
            font-weight: bold;
            }
        .titles{
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 5px;
        }
        .desc{
            margin-left: 10px;
            border-left: solid lightgray 5px;
            padding: 5px;
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
        .weaponRow.even {
            background-color: lightgray;
        }

    .weaponRow.odd {
            background-color: white;
        }
    `

    staticProperties = {
        simpleMeleeWeapons: { type: Array },
        addedWeapons: { type: Array },
        weaponlessHB: {type: Number},
        hb: {type: Number}
    }

    static get properties() {
        return {
            weapons: { type: Array },
        }
    }

    constructor() {
        super();
        this.weapons = [];
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

    render() { 
        return html`
            <div class="background">
                <div>
                    <div class="titles">
                        <span>Nimi</span>
                        <span>Hinta</span>
                        <span>Vahinko</span>
                        <span>Nimi</span>
                        <span>Vahinkotyyppi</span>
                        <span>Paino</span>
                        <span>Ominaisuudet</span>
                    </div>
                    ${this.weapons.map((weapon, i) => html`
                        <div class="weaponRow ${i % 2 === 0 ? 'even' : 'odd'}">
                            <span>${weapon.Nimi}</span>
                            <span>${weapon.Hinta}</span>
                            <span>${weapon.Vahinko}</span>
                            <span>${weapon.Vahinkotyyppi}</span>
                            <span>${weapon.Paino}</span>
                            <span>${weapon.Ominaisuudet}</span>
                        </div>    
                    `)}
                </div>
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
        `
    }
}
customElements.define('weapons-view', WeaponsView);