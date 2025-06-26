import { LitElement, html } from 'lit';
import '../../components/spell-card.js';

export class SpellsView extends LitElement {

  static properties = {
    spells: { type: Array }
  };

  constructor() {
    super();
    this.spells = [];
  }

  async connectedCallback() {
    super.connectedCallback();
    await this.loadCSV();
  }

  async loadCSV() {
    const response = await fetch("data/spells.csv")
    const csvText = await response.text();

    const result = Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true
    });
    this.spells = result.data;
    console.log(this.spells)
  }

  render() {
    return html`
    ${this.spells.map(spell => html`
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

    `;
  }
}
customElements.define('spells-view', SpellsView);