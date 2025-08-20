import { LitElement, html, css } from 'lit';
import '../../components/spell-card.js';

export class SpellsView extends LitElement {

  static styles = css`
    .cards{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .searchWrapper{
      display: flex;
      justify-content: center;
      padding: 10px;
    }
    .search{
      width: 300px;
      border-radius: 10px;
      font-family: "Roboto Condensed", sans-serif;
      font-size: 20px;
      font-weight: bold;
      padding: 5px;
    }
  `

  static properties = {
    spells: { type: Array },
    filteredSpells: { type: Array }
  };

  constructor() {
    super();
    this.spells = [];
    this.filteredSpells = [];
  }

  async connectedCallback() {
    super.connectedCallback();
    await this.loadCSV();
    document.title = "Loitsut";
  }

  async loadCSV() {
    const response = await fetch("data/spells.csv")
    const csvText = await response.text();

    const result = Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true
    });
    this.spells = result.data;
    this.filteredSpells = result.data;
    console.log(this.spells)
  }

  handleSearch(e) {
    const query = e.target.value.toLowerCase();
    this.filteredSpells = this.spells.filter(spell =>
      spell.nimi.toLowerCase().includes(query) ||
      spell.loitsunPiiri.toLowerCase().includes(query) ||
      spell.loitsimisviive.toLowerCase().includes(query)
    );
  }

  render() {
    return html`
    <section class="searchWrapper">
      <input
        class="search"
        type="text"
        placeholder="Etsi loitsuja..."
        @input=${this.handleSearch}
      >
    </section>
    <section class="cards">
      ${this.filteredSpells.map(spell => html`
        <spell-card
        .nimi=${spell.nimi}
        .loitsunPiiri=${spell.loitsunPiiri}
        .loitsunKoulukunta=${spell.loitsunKoulukunta}
        .loitsimisviive=${spell.loitsimisviive}
        .kantama=${spell.kantama}
        .komponentit=${spell.komponentit}
        .kesto=${spell.kesto}
        .kuvaus=${spell.kuvaus}
        >
        </spell-card>
        `)}
    </section>
    `;
  }
}
customElements.define('spells-view', SpellsView);