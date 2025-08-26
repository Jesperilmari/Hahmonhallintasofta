import { LitElement, html, css } from 'lit';
import { asset } from '../utils/assets.js';

export class Casting extends LitElement {
  static styles = css`
    .statsRow {
      display: flex;
      flex-direction: row;
      align-items: last baseline;
      justify-content: center;
      box-sizing: border-box;
      flex-wrap: wrap;
      gap: 10px;
    }
    .stats {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 5px;
      margin-right: 5px;
      flex: 1 1 150px;
      min-width: 150px;
      box-sizing: border-box;
    }
    .title {
      margin-left: 5px;
      margin-right: 5px;
      margin-bottom: 5px;
      margin-top: 10px;
      text-align: center;
      font-size: 17px;
    }
    .statTextarea {
      font-family: "Roboto Condensed", sans-serif;
      width: 100%;
      resize: none;
      border-radius: 5px;
      border: solid 2px lightblue;
      text-align: center;
      font-weight: bold;
      box-sizing: border-box;
      line-height: 25px;
      font-size: 20px;
      margin: 0px;
    }
    .spellSlotRow {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
      flex-wrap: wrap;
      border: solid 2px lightblue;
      border-radius: 5px;
      margin: 5px;
    }
    .slot {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      border: solid 1px lightgray;
      padding: 2.5px;
    }
    .slotButton {
      width: 30px;
      margin: 1px;
      margin-left: 10px;
      border: none;
    }
    .buttonWrapper {
      display: flex;
      flex-direction: column;
    }
    .slotTitle {
      font-weight: bold;
      font-size: 20px;
    }
    .slotWrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 5px;
    }
    .addSpellRow{
        display: flex;
        flex-direction: row;
        margin: 5px;
    }
    .selectedSpellsWrapper{
      border-bottom: solid 1px lightgray;
    }
    .spellsDropDown{
        font-family: "Roboto Condensed", sans-serif;
        font-size: 15px;
        border: none;
        border-radius: 10px;
        padding: 10px;
    }
    .dropdownOption{
        color: black;
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
    .spellRow{
      display: flex;
      align-items: center;
      padding: 10px;
    }
    .spellTitle{
      width: 150px;
    }
    .spellRow.even {
      background-color: lightgray;
    }
    .spellRow.odd {
      background-color: white;
    }
    .toggleprepared {
      width: 12px;
      height: 12px;
      border: 1px dotted black;
      border-radius: 15px;
      margin-left: 15px;
      margin-right: 15px;
      cursor: pointer;
    }
    .toggleprepared:hover {
      background-color: gray;
    }
    .toggleprepared.toggled {
      background-color: black;
    }
    .options{
      display: flex;
      flex-direction: row;
      margin-left: auto;
    }
    .img{
        height: 20px;
        width: 20px;
        display: flex;
        padding-left: 10px;
    }
    .subTitle{
      display: flex;
      flex-direction: row;
      padding: 5px;
      padding-left: 55px;
    }
    .boldText{
      font-weight: bold;
      padding-right: 5px;
    }
    .spellDesc{
      padding-left: 55px;
      padding-bottom: 5px;
    }
  `;

  static get properties() {
    return {
      castingStats: { type: Object },
      spellSlots: { type: Object },
      spells: { type: Object },
      addedCantrips: { type: Array },
      addedlvl1Spells: { type: Array },
      addedlvl2Spells: { type: Array },
      addedlvl3Spells: { type: Array },
      addedlvl4Spells: { type: Array },
      addedlvl5Spells: { type: Array },
      addedlvl6Spells: { type: Array },
      addedlvl7Spells: { type: Array },
      addedlvl8Spells: { type: Array },
      addedlvl9Spells: { type: Array },
      openSpellDetails: { state: true },
    };
  }

  constructor() {
    super();
    this.spells = [];
    this.castingStats = JSON.parse(localStorage.getItem('castingStats') || '{}');
    this.addedCantrips = JSON.parse(localStorage.getItem('addedCantrips') || '[]');
    this.addedlvl1Spells = JSON.parse(localStorage.getItem('addedlvl1Spells') || '[]');
    this.addedlvl2Spells = JSON.parse(localStorage.getItem('addedlvl2Spells') || '[]');
    this.addedlvl3Spells = JSON.parse(localStorage.getItem('addedlvl3Spells') || '[]');
    this.addedlvl4Spells = JSON.parse(localStorage.getItem('addedlvl4Spells') || '[]');
    this.addedlvl5Spells = JSON.parse(localStorage.getItem('addedlvl5Spells') || '[]');
    this.addedlvl6Spells = JSON.parse(localStorage.getItem('addedlvl6Spells') || '[]');
    this.addedlvl7Spells = JSON.parse(localStorage.getItem('addedlvl7Spells') || '[]');
    this.addedlvl8Spells = JSON.parse(localStorage.getItem('addedlvl8Spells') || '[]');
    this.addedlvl9Spells = JSON.parse(localStorage.getItem('addedlvl9Spells') || '[]');
    this.openSpellDetails = new Set();
    const savedSlots = JSON.parse(localStorage.getItem('spellSlots') || '{}');
    this.spellSlots =
      savedSlots && Object.keys(savedSlots).length === 9
        ? savedSlots
        : { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
  }

  async connectedCallback() {
    super.connectedCallback();
    await this.loadCSV();
  }

  async loadCSV() {
    const response = await fetch(import.meta.env.BASE_URL + "data/spells.csv");
    const csvText = await response.text();
    const result = Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true
    });
    this.spells = result.data;
    this.spells.sort((a, b) => a.nimi.localeCompare(b.nimi, 'fi', { sensitivity: 'base' }));
    console.log(this.spells);
  }

  onSpellStatBlur(id, value) {
    this.castingStats = {
      ...this.castingStats,
      [id]: value,
    };
    localStorage.setItem('castingStats', JSON.stringify(this.castingStats));
  }

  incrementSpellSlot(id) {
    this.spellSlots = {
      ...this.spellSlots,
      [id]: (typeof this.spellSlots[id] === 'number' ? this.spellSlots[id] : 1) + 1,
    };
    localStorage.setItem('spellSlots', JSON.stringify(this.spellSlots));
  }

  decrementSpellSlot(id) {
    this.spellSlots = {
      ...this.spellSlots,
      [id]: Math.max(0, (typeof this.spellSlots[id] === 'number' ? this.spellSlots[id] : 1) - 1),
    };
    localStorage.setItem('spellSlots', JSON.stringify(this.spellSlots));
  }

  addSpell() {
    const dropdown = this.shadowRoot.getElementById('spells');
    const selectedName = dropdown.value;
    if (selectedName === 'default') return;
    const selectedSpell = this.spells.find(s => s.nimi === selectedName);

    if (selectedSpell && selectedSpell.loitsunPiiri == "Taikakonsti") {
      this.addedCantrips = [...this.addedCantrips, selectedSpell];
      localStorage.setItem('addedCantrips', JSON.stringify(this.addedCantrips));
    }
    if (selectedSpell && selectedSpell.loitsunPiiri == "1-piirin") {
      this.addedlvl1Spells = [...this.addedlvl1Spells, selectedSpell];
      localStorage.setItem('addedlvl1Spells', JSON.stringify(this.addedlvl1Spells));
    }
    if (selectedSpell && selectedSpell.loitsunPiiri == "2-piirin") {
      this.addedlvl2Spells = [...this.addedlvl2Spells, selectedSpell];
      localStorage.setItem('addedlvl2Spells', JSON.stringify(this.addedlvl2Spells));
    }
    if (selectedSpell && selectedSpell.loitsunPiiri == "3-piirin") {
      this.addedlvl3Spells = [...this.addedlvl3Spells, selectedSpell];
      localStorage.setItem('addedlvl3Spells', JSON.stringify(this.addedlvl3Spells));
    }
    if (selectedSpell && selectedSpell.loitsunPiiri == "4-piirin") {
      this.addedlvl4Spells = [...this.addedlvl4Spells, selectedSpell];
      localStorage.setItem('addedlvl4Spells', JSON.stringify(this.addedlvl4Spells));
    }
    if (selectedSpell && selectedSpell.loitsunPiiri == "5-piirin") {
      this.addedlvl5Spells = [...this.addedlvl5Spells, selectedSpell];
      localStorage.setItem('addedlvl5Spells', JSON.stringify(this.addedlvl5Spells));
    }
    if (selectedSpell && selectedSpell.loitsunPiiri == "6-piirin") {
      this.addedlvl6Spells = [...this.addedlvl6Spells, selectedSpell];
      localStorage.setItem('addedlvl6Spells', JSON.stringify(this.addedlvl6Spells));
    }
    if (selectedSpell && selectedSpell.loitsunPiiri == "7-piirin") {
      this.addedlvl7Spells = [...this.addedlvl7Spells, selectedSpell];
      localStorage.setItem('addedlvl7Spells', JSON.stringify(this.addedlvl7Spells));
    }
    if (selectedSpell && selectedSpell.loitsunPiiri == "8-piirin") {
      this.addedlvl8Spells = [...this.addedlvl8Spells, selectedSpell];
      localStorage.setItem('addedlvl8Spells', JSON.stringify(this.addedlvl8Spells));
    }
    if (selectedSpell && selectedSpell.loitsunPiiri == "9-piirin") {
      this.addedlvl9Spells = [...this.addedlvl9Spells, selectedSpell];
      localStorage.setItem('addedlvl9Spells', JSON.stringify(this.addedlvl9Spells));
    }
  }
  toggleSpellDetail(spellName) {
    const updated = new Set(this.openSpellDetails);
    if (updated.has(spellName)) {
      updated.delete(spellName);
    } else {
      updated.add(spellName);
    }
    this.openSpellDetails = updated;
  }

  deleteSpell(spellName) {
    const spellLists = [
      { arr: 'addedCantrips', key: 'addedCantrips' },
      { arr: 'addedlvl1Spells', key: 'addedlvl1Spells' },
      { arr: 'addedlvl2Spells', key: 'addedlvl2Spells' },
      { arr: 'addedlvl3Spells', key: 'addedlvl3Spells' },
      { arr: 'addedlvl4Spells', key: 'addedlvl4Spells' },
      { arr: 'addedlvl5Spells', key: 'addedlvl5Spells' },
      { arr: 'addedlvl6Spells', key: 'addedlvl6Spells' },
      { arr: 'addedlvl7Spells', key: 'addedlvl7Spells' },
      { arr: 'addedlvl8Spells', key: 'addedlvl8Spells' },
      { arr: 'addedlvl9Spells', key: 'addedlvl9Spells' }
    ];

    for (let { arr, key } of spellLists) {
        if (this[arr].some(spell => spell.nimi === spellName)) {
          this[arr] = this[arr].filter(spell => spell.nimi !== spellName);
          localStorage.setItem(key, JSON.stringify(this[arr]));

          if (this.selectedSpellName === spellName) {
            this.selectedSpellName = null;
          }
          break;
        }
      }
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="statsRow">
          <div class="stats">
            <span class="title">LOITSIMISOMINAISUUS</span>
            <textarea
              id="loitsimisominaisuus"
              class="statTextarea"
              rows="1"
              spellcheck="false"
              @blur="${(e) => this.onSpellStatBlur(e.target.id, e.target.value)}"
              .value="${this.castingStats.loitsimisominaisuus || ''}"
            ></textarea>
          </div>
          <div class="stats">
            <span class="title">LOITSUN PELASTUSHEITON VA</span>
            <textarea
              id="VA"
              class="statTextarea"
              rows="1"
              @blur="${(e) => this.onSpellStatBlur(e.target.id, e.target.value)}"
              .value="${this.castingStats.VA || ''}"
            ></textarea>
          </div>
          <div class="stats">
            <span class="title">LOUTSUN HYÖKKÄYSMUUTTUJA</span>
            <textarea
              id="hyökkäysmuuttuja"
              class="statTextarea"
              rows="1"
              @blur="${(e) => this.onSpellStatBlur(e.target.id, e.target.value)}"
              .value="${this.castingStats.hyökkäysmuuttuja || ''}"
            ></textarea>
          </div>
        </div>

        <div class="spellSlotRow">
          ${[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => html`
            <div class="slotWrapper">
              <section class="slotTitle">${i}</section>
              <div class="slot" id="${i}">
                <span class="slotCounter">${this.spellSlots[i]}</span>
                <span class="buttonWrapper">
                  <button class="slotButton" @click="${() => this.incrementSpellSlot(i)}">+</button>
                  <button class="slotButton" @click="${() => this.decrementSpellSlot(i)}">-</button>
                </span>
              </div>
            </div>
          `)}
        </div>

        <div class="selectedSpellsWrapper">
          <div class="title">TAIKAKONSTIT</div>
            ${this.addedCantrips.map((spell, i) => html`
              <div class="spellRow ${i % 2 === 0 ? 'even' : 'odd'}">
                <div
                  class="toggleprepared ${this.toggleprepared ? 'toggled' : ''}"
                  title="Toggle prepared"
                ></div>
                <span class="spellTitle">${spell.nimi}</span>
                <div class="options">
                  <img
                    src="${import.meta.env.BASE_URL}icons/down-arrow.png"
                    class="img"
                    @click="${() => this.toggleSpellDetail(spell.nimi)}"
                    title="Show Details"
                  >
                  <img src="${import.meta.env.BASE_URL}icons/trash.png" class="img" title="Delete" @click="${() => this.deleteSpell(spell.nimi)}">
                </div>
              </div>

              ${this.openSpellDetails.has(spell.nimi)
                ? html`
                <div class="spellDetails">
                  <div class="subTitle">
                    <span class="boldText">Loitsun koulukunta:</span>${spell.loitsunKoulukunta}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Loitsun lotisimisviive:</span>${spell.loitsimisviive}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kantama:</span>${spell.kantama}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Komponentit:</span>${spell.komponentit}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kesto:</span>${spell.kesto}
                  </div>
                  <div class="spellDesc">
                    ${spell.kuvaus}
                  </div>
                </div>`
                : ''}
            `)}
        </div>
        
        <div class="selectedSpellsWrapper">
          <div class="title">1. PIIRIN LOITSUT</div>
            ${this.addedlvl1Spells.map((spell, i) => html`
              <div class="spellRow ${i % 2 === 0 ? 'even' : 'odd'}">
                <div
                  class="toggleprepared ${this.toggleprepared ? 'toggled' : ''}"
                  title="Toggle prepared"
                ></div>
                <span class="spellTitle">${spell.nimi}</span>
                <div class="options">
                  <img
                    src="${import.meta.env.BASE_URL}icons/down-arrow.png"
                    class="img"
                    @click="${() => this.toggleSpellDetail(spell.nimi)}"
                    title="Show Details"
                  >
                  <img src="${import.meta.env.BASE_URL}icons/trash.png" class="img" title="Delete" @click="${() => this.deleteSpell(spell.nimi)}">
                </div>
              </div>

              ${this.openSpellDetails.has(spell.nimi)
                ? html`
                <div class="spellDetails">
                  <div class="subTitle">
                    <span class="boldText">Loitsun koulukunta:</span>${spell.loitsunKoulukunta}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Loitsun lotisimisviive:</span>${spell.loitsimisviive}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kantama:</span>${spell.kantama}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Komponentit:</span>${spell.komponentit}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kesto:</span>${spell.kesto}
                  </div>
                  <div class="spellDesc">
                    ${spell.kuvaus}
                  </div>
                </div>`
                : ''}
            `)}
        </div>

        <div class="selectedSpellsWrapper">
          <div class="title">2. PIIRIN LOITSUT</div>
            ${this.addedlvl2Spells.map((spell, i) => html`
              <div class="spellRow ${i % 2 === 0 ? 'even' : 'odd'}">
                <div
                  class="toggleprepared ${this.toggleprepared ? 'toggled' : ''}"
                  title="Toggle prepared"
                ></div>
                <span class="spellTitle">${spell.nimi}</span>
                <div class="options">
                  <img
                    src="${import.meta.env.BASE_URL}icons/down-arrow.png"
                    class="img"
                    @click="${() => this.toggleSpellDetail(spell.nimi)}"
                    title="Show Details"
                  >
                  <img src="${import.meta.env.BASE_URL}icons/trash.png" class="img" title="Delete" @click="${() => this.deleteSpell(spell.nimi)}">
                </div>
              </div>

              ${this.openSpellDetails.has(spell.nimi)
                ? html`
                <div class="spellDetails">
                  <div class="subTitle">
                    <span class="boldText">Loitsun koulukunta:</span>${spell.loitsunKoulukunta}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Loitsun lotisimisviive:</span>${spell.loitsimisviive}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kantama:</span>${spell.kantama}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Komponentit:</span>${spell.komponentit}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kesto:</span>${spell.kesto}
                  </div>
                  <div class="spellDesc">
                    ${spell.kuvaus}
                  </div>
                </div>`
                : ''}
            `)}
        </div>

        <div class="selectedSpellsWrapper">
          <div class="title">3. PIIRIN LOITSUT</div>
            ${this.addedlvl3Spells.map((spell, i) => html`
              <div class="spellRow ${i % 2 === 0 ? 'even' : 'odd'}">
                <div
                  class="toggleprepared ${this.toggleprepared ? 'toggled' : ''}"
                  title="Toggle prepared"
                ></div>
                <span class="spellTitle">${spell.nimi}</span>
                <div class="options">
                  <img
                    src="${import.meta.env.BASE_URL}icons/down-arrow.png"
                    class="img"
                    @click="${() => this.toggleSpellDetail(spell.nimi)}"
                    title="Show Details"
                  >
                  <img src="${import.meta.env.BASE_URL}icons/trash.png" class="img" title="Delete" @click="${() => this.deleteSpell(spell.nimi)}">
                </div>
              </div>

              ${this.openSpellDetails.has(spell.nimi)
                ? html`
                <div class="spellDetails">
                  <div class="subTitle">
                    <span class="boldText">Loitsun koulukunta:</span>${spell.loitsunKoulukunta}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Loitsun lotisimisviive:</span>${spell.loitsimisviive}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kantama:</span>${spell.kantama}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Komponentit:</span>${spell.komponentit}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kesto:</span>${spell.kesto}
                  </div>
                  <div class="spellDesc">
                    ${spell.kuvaus}
                  </div>
                </div>`
                : ''}
            `)}
        </div>

        <div class="selectedSpellsWrapper">
          <div class="title">4. PIIRIN LOITSUT</div>
            ${this.addedlvl4Spells.map((spell, i) => html`
              <div class="spellRow ${i % 2 === 0 ? 'even' : 'odd'}">
                <div
                  class="toggleprepared ${this.toggleprepared ? 'toggled' : ''}"
                  title="Toggle prepared"
                ></div>
                <span class="spellTitle">${spell.nimi}</span>
                <div class="options">
                  <img
                    src="${import.meta.env.BASE_URL}icons/down-arrow.png"
                    class="img"
                    @click="${() => this.toggleSpellDetail(spell.nimi)}"
                    title="Show Details"
                  >
                  <img src="${import.meta.env.BASE_URL}icons/trash.png" class="img" title="Delete" @click="${() => this.deleteSpell(spell.nimi)}">
                </div>
              </div>

              ${this.openSpellDetails.has(spell.nimi)
                ? html`
                <div class="spellDetails">
                  <div class="subTitle">
                    <span class="boldText">Loitsun koulukunta:</span>${spell.loitsunKoulukunta}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Loitsun lotisimisviive:</span>${spell.loitsimisviive}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kantama:</span>${spell.kantama}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Komponentit:</span>${spell.komponentit}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kesto:</span>${spell.kesto}
                  </div>
                  <div class="spellDesc">
                    ${spell.kuvaus}
                  </div>
                </div>`
                : ''}
            `)}
        </div>

        <div class="selectedSpellsWrapper">
          <div class="title">5. PIIRIN LOITSUT</div>
            ${this.addedlvl5Spells.map((spell, i) => html`
              <div class="spellRow ${i % 2 === 0 ? 'even' : 'odd'}">
                <div
                  class="toggleprepared ${this.toggleprepared ? 'toggled' : ''}"
                  title="Toggle prepared"
                ></div>
                <span class="spellTitle">${spell.nimi}</span>
                <div class="options">
                  <img
                    src="${import.meta.env.BASE_URL}icons/down-arrow.png"
                    class="img"
                    @click="${() => this.toggleSpellDetail(spell.nimi)}"
                    title="Show Details"
                  >
                  <img src="${import.meta.env.BASE_URL}icons/trash.png" class="img" title="Delete" @click="${() => this.deleteSpell(spell.nimi)}">
                </div>
              </div>

              ${this.openSpellDetails.has(spell.nimi)
                ? html`
                <div class="spellDetails">
                  <div class="subTitle">
                    <span class="boldText">Loitsun koulukunta:</span>${spell.loitsunKoulukunta}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Loitsun lotisimisviive:</span>${spell.loitsimisviive}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kantama:</span>${spell.kantama}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Komponentit:</span>${spell.komponentit}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kesto:</span>${spell.kesto}
                  </div>
                  <div class="spellDesc">
                    ${spell.kuvaus}
                  </div>
                </div>`
                : ''}
            `)}
        </div>

        <div class="selectedSpellsWrapper">
          <div class="title">6. PIIRIN LOITSUT</div>
            ${this.addedlvl6Spells.map((spell, i) => html`
              <div class="spellRow ${i % 2 === 0 ? 'even' : 'odd'}">
                <div
                  class="toggleprepared ${this.toggleprepared ? 'toggled' : ''}"
                  title="Toggle prepared"
                ></div>
                <span class="spellTitle">${spell.nimi}</span>
                <div class="options">
                  <img
                    src="${import.meta.env.BASE_URL}icons/down-arrow.png"
                    class="img"
                    @click="${() => this.toggleSpellDetail(spell.nimi)}"
                    title="Show Details"
                  >
                  <img src="${import.meta.env.BASE_URL}icons/trash.png" class="img" title="Delete" @click="${() => this.deleteSpell(spell.nimi)}">
                </div>
              </div>

              ${this.openSpellDetails.has(spell.nimi)
                ? html`
                <div class="spellDetails">
                  <div class="subTitle">
                    <span class="boldText">Loitsun koulukunta:</span>${spell.loitsunKoulukunta}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Loitsun lotisimisviive:</span>${spell.loitsimisviive}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kantama:</span>${spell.kantama}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Komponentit:</span>${spell.komponentit}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kesto:</span>${spell.kesto}
                  </div>
                  <div class="spellDesc">
                    ${spell.kuvaus}
                  </div>
                </div>`
                : ''}
            `)}
        </div>

        <div class="selectedSpellsWrapper">
          <div class="title">7. PIIRIN LOITSUT</div>
            ${this.addedlvl7Spells.map((spell, i) => html`
              <div class="spellRow ${i % 2 === 0 ? 'even' : 'odd'}">
                <div
                  class="toggleprepared ${this.toggleprepared ? 'toggled' : ''}"
                  title="Toggle prepared"
                ></div>
                <span class="spellTitle">${spell.nimi}</span>
                <div class="options">
                  <img
                    src="${import.meta.env.BASE_URL}icons/down-arrow.png"
                    class="img"
                    @click="${() => this.toggleSpellDetail(spell.nimi)}"
                    title="Show Details"
                  >
                  <img src="${import.meta.env.BASE_URL}icons/trash.png" class="img" title="Delete" @click="${() => this.deleteSpell(spell.nimi)}">
                </div>
              </div>

              ${this.openSpellDetails.has(spell.nimi)
                ? html`
                <div class="spellDetails">
                  <div class="subTitle">
                    <span class="boldText">Loitsun koulukunta:</span>${spell.loitsunKoulukunta}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Loitsun lotisimisviive:</span>${spell.loitsimisviive}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kantama:</span>${spell.kantama}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Komponentit:</span>${spell.komponentit}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kesto:</span>${spell.kesto}
                  </div>
                  <div class="spellDesc">
                    ${spell.kuvaus}
                  </div>
                </div>`
                : ''}
            `)}
        </div>

        <div class="selectedSpellsWrapper">
          <div class="title">8. PIIRIN LOITSUT</div>
            ${this.addedlvl8Spells.map((spell, i) => html`
              <div class="spellRow ${i % 2 === 0 ? 'even' : 'odd'}">
                <div
                  class="toggleprepared ${this.toggleprepared ? 'toggled' : ''}"
                  title="Toggle prepared"
                ></div>
                <span class="spellTitle">${spell.nimi}</span>
                <div class="options">
                  <img
                    src="${import.meta.env.BASE_URL}icons/down-arrow.png"
                    class="img"
                    @click="${() => this.toggleSpellDetail(spell.nimi)}"
                    title="Show Details"
                  >
                  <img src="${import.meta.env.BASE_URL}icons/trash.png" class="img" title="Delete" @click="${() => this.deleteSpell(spell.nimi)}">
                </div>
              </div>

              ${this.openSpellDetails.has(spell.nimi)
                ? html`
                <div class="spellDetails">
                  <div class="subTitle">
                    <span class="boldText">Loitsun koulukunta:</span>${spell.loitsunKoulukunta}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Loitsun lotisimisviive:</span>${spell.loitsimisviive}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kantama:</span>${spell.kantama}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Komponentit:</span>${spell.komponentit}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kesto:</span>${spell.kesto}
                  </div>
                  <div class="spellDesc">
                    ${spell.kuvaus}
                  </div>
                </div>`
                : ''}
            `)}
        </div>

        <div class="selectedSpellsWrapper">
          <div class="title">9. PIIRIN LOITSUT</div>
            ${this.addedlvl9Spells.map((spell, i) => html`
              <div class="spellRow ${i % 2 === 0 ? 'even' : 'odd'}">
                <div
                  class="toggleprepared ${this.toggleprepared ? 'toggled' : ''}"
                  title="Toggle prepared"
                ></div>
                <span class="spellTitle">${spell.nimi}</span>
                <div class="options">
                  <img
                    src="${import.meta.env.BASE_URL}icons/down-arrow.png"
                    class="img"
                    @click="${() => this.toggleSpellDetail(spell.nimi)}"
                    title="Show Details"
                  >
                  <img src="${import.meta.env.BASE_URL}icons/trash.png" class="img" title="Delete" @click="${() => this.deleteSpell(spell.nimi)}">
                </div>
              </div>

              ${this.openSpellDetails.has(spell.nimi)
                ? html`
                <div class="spellDetails">
                  <div class="subTitle">
                    <span class="boldText">Loitsun koulukunta:</span>${spell.loitsunKoulukunta}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Loitsun lotisimisviive:</span>${spell.loitsimisviive}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kantama:</span>${spell.kantama}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Komponentit:</span>${spell.komponentit}
                  </div>
                  <div class="subTitle">
                    <span class="boldText">Kesto:</span>${spell.kesto}
                  </div>
                  <div class="spellDesc">
                    ${spell.kuvaus}
                  </div>
                </div>`
                : ''}
            `)}
        </div>

        <div class="addSpellRow">
          <select class="spellsDropDown" id="spells">
            <option value="default" disabled selected>Lisää loitsu</option>
            ${this.spells.map(
      spell => html`<option class="dropdownOption" value="${spell.nimi}">${spell.nimi}</option>`
    )}
          </select>
          <button type="button" class="addBtn" @click="${this.addSpell}">+</button>
        </div>
      </div>
    `;
  }
}

customElements.define('casting-element', Casting);
