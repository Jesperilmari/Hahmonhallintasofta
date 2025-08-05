import { LitElement, html, css } from 'lit';

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
  `;

    static get properties() {
        return {
            castingStats: { type: Object },
            spellSlots: { type: Object },
        };
    }

    constructor() {
        super();
        this.castingStats = JSON.parse(localStorage.getItem('castingStats') || '{}');

        const savedSlots = JSON.parse(localStorage.getItem('spellSlots') || '{}');
        this.spellSlots =
            savedSlots && Object.keys(savedSlots).length === 9
                ? savedSlots
                : { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
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
          <div class="slotWrapper">
            <section class="slotTitle">1</section>
            <div class="slot" id="1">
              <span class="slotCounter">${this.spellSlots[1]}</span>
              <span class="buttonWrapper">
                <button
                  class="slotButton"
                  @click="${() => this.incrementSpellSlot(1)}"
                >
                  +
                </button>
                <button
                  class="slotButton"
                  @click="${() => this.decrementSpellSlot(1)}"
                >
                  -
                </button>
              </span>
            </div>
          </div>

          <div class="slotWrapper">
            <section class="slotTitle">2</section>
            <div class="slot" id="2">
              <span class="slotCounter">${this.spellSlots[2]}</span>
              <span class="buttonWrapper">
                <button
                  class="slotButton"
                  @click="${() => this.incrementSpellSlot(2)}"
                >
                  +
                </button>
                <button
                  class="slotButton"
                  @click="${() => this.decrementSpellSlot(2)}"
                >
                  -
                </button>
              </span>
            </div>
          </div>

          <div class="slotWrapper">
            <section class="slotTitle">3</section>
            <div class="slot" id="3">
              <span class="slotCounter">${this.spellSlots[3]}</span>
              <span class="buttonWrapper">
                <button
                  class="slotButton"
                  @click="${() => this.incrementSpellSlot(3)}"
                >
                  +
                </button>
                <button
                  class="slotButton"
                  @click="${() => this.decrementSpellSlot(3)}"
                >
                  -
                </button>
              </span>
            </div>
          </div>

          <div class="slotWrapper">
            <section class="slotTitle">4</section>
            <div class="slot" id="4">
              <span class="slotCounter">${this.spellSlots[4]}</span>
              <span class="buttonWrapper">
                <button
                  class="slotButton"
                  @click="${() => this.incrementSpellSlot(4)}"
                >
                  +
                </button>
                <button
                  class="slotButton"
                  @click="${() => this.decrementSpellSlot(4)}"
                >
                  -
                </button>
              </span>
            </div>
          </div>

          <div class="slotWrapper">
            <section class="slotTitle">5</section>
            <div class="slot" id="5">
              <span class="slotCounter">${this.spellSlots[5]}</span>
              <span class="buttonWrapper">
                <button
                  class="slotButton"
                  @click="${() => this.incrementSpellSlot(5)}"
                >
                  +
                </button>
                <button
                  class="slotButton"
                  @click="${() => this.decrementSpellSlot(5)}"
                >
                  -
                </button>
              </span>
            </div>
          </div>

          <div class="slotWrapper">
            <section class="slotTitle">6</section>
            <div class="slot" id="6">
              <span class="slotCounter">${this.spellSlots[6]}</span>
              <span class="buttonWrapper">
                <button
                  class="slotButton"
                  @click="${() => this.incrementSpellSlot(6)}"
                >
                  +
                </button>
                <button
                  class="slotButton"
                  @click="${() => this.decrementSpellSlot(6)}"
                >
                  -
                </button>
              </span>
            </div>
          </div>

          <div class="slotWrapper">
            <section class="slotTitle">7</section>
            <div class="slot" id="7">
              <span class="slotCounter">${this.spellSlots[7]}</span>
              <span class="buttonWrapper">
                <button
                  class="slotButton"
                  @click="${() => this.incrementSpellSlot(7)}"
                >
                  +
                </button>
                <button
                  class="slotButton"
                  @click="${() => this.decrementSpellSlot(7)}"
                >
                  -
                </button>
              </span>
            </div>
          </div>

          <div class="slotWrapper">
            <section class="slotTitle">8</section>
            <div class="slot" id="8">
              <span class="slotCounter">${this.spellSlots[8]}</span>
              <span class="buttonWrapper">
                <button
                  class="slotButton"
                  @click="${() => this.incrementSpellSlot(8)}"
                >
                  +
                </button>
                <button
                  class="slotButton"
                  @click="${() => this.decrementSpellSlot(8)}"
                >
                  -
                </button>
              </span>
            </div>
          </div>

          <div class="slotWrapper">
            <section class="slotTitle">9</section>
            <div class="slot" id="9">
              <span class="slotCounter">${this.spellSlots[9]}</span>
              <span class="buttonWrapper">
                <button
                  class="slotButton"
                  @click="${() => this.incrementSpellSlot(9)}"
                >
                  +
                </button>
                <button
                  class="slotButton"
                  @click="${() => this.decrementSpellSlot(9)}"
                >
                  -
                </button>
              </span>
            </div>
          </div>
        </div>
        <div class="selectedSpellsWrapper">
            <div class="title">TAIKAKONSTIT</div>
        </div>
        <div class="selectedSpellsWrapper">
            <div class="title">1. PIIRIN LOITSUT</div>
        </div>
        <div class="selectedSpellsWrapper">
            <div class="title">2. PIIRIN LOITSUT</div>
        </div>
        <div class="selectedSpellsWrapper">
            <div class="title">3. PIIRIN LOITSUT</div>
        </div>
        <div class="selectedSpellsWrapper">
            <div class="title">4. PIIRIN LOITSUT</div>
        </div>
        <div class="selectedSpellsWrapper">
            <div class="title">5. PIIRIN LOITSUT</div>
        </div>
        <div class="selectedSpellsWrapper">
            <div class="title">6. PIIRIN LOITSUT</div>
        </div>
        <div class="selectedSpellsWrapper">
            <div class="title">7. PIIRIN LOITSUT</div>
        </div>
        <div class="selectedSpellsWrapper">
            <div class="title">8. PIIRIN LOITSUT</div>
        </div>
        <div class="selectedSpellsWrapper">
            <div class="title">9. PIIRIN LOITSUT</div>
        </div>
      </div>
    `;
    }
}

customElements.define('casting-element', Casting);
