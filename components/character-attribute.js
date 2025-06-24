import { LitElement, html, css } from 'lit-element';

class CharacterAttribute extends LitElement {

  static styles = css`
    .attributeWrapper {
      display: flex;
      flex-direction: column;
      justify-content: top;
      align-items: center;
      color: black;
      font-size: 14px;
      border: 3px solid lightblue;
      width: 100px;
      margin: 10px;
      padding: 0px;
      height: 110px;
      border-radius: 10px;
      background-color: white;
      font-family: "Roboto Condensed", sans-serif;
    }
    .value{
      font-size: 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 1px solid lightgray;
      width: 75px;
      height: 35px;
      border-radius: 10px;
      background-color: white;
      margin:0;
      padding:0;
    }
    .modifier{
      font-size: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 5px;
      align-items: center;
      width: 60px;
      border-radius: 10px;
      border: 2px solid lightblue;
      background-color: white;
      border-radius: 50px;
    }
    .attributeAddRemove{
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    button{
      margin: 3px;
      width:25px;
      height:25px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-style: solid;
    }
    .value.highlighted {
      background-color: lightgray
    }
    .name{
      margin: 0;
      padding: 0;
    }
  `;

  static properties = {
    name: { type: String },
    value: { type: Number },
    highlight: { type: Boolean },
    showButtons: { type: Boolean }
  };

  static modifiers = {
    1: "-5",
    2: "-4",
    3: "-4",
    4: "-3",
    5: "-3",
    6: "-2",
    7: "-2",
    8: "-1",
    9: "-1",
    10: "0",
    11: "0",
    12: "+1",
    13: "+1",
    14: "+2",
    15: "+2",
    16: "+3",
    17: "+3",
    18: "+4",
    19: "+4",
    20: "+5",
    21: "+5",
    22: "+6",
    23: "+6",
    24: "+7",
    25: "+7",
    26: "+8",
    27: "+8",
    28: "+9",
    29: "+9",
    30: "+10",
  }

  constructor() {
    super();
    this.highlight = false;
    this.showButtons = false;
  }

  firstUpdated() {
  this.dispatchEvent(new CustomEvent('modifier-changed', {
    bubbles: true,
    composed: true,
    detail: {
      attr: this.id,
      modifier: this.getModifier()
    }
  }));
}

  mouseEnterAtribute() {
    this.highlight = true;
  }

  mouseLeaveAtribute() {
    this.highlight = false;
  }

  toggleButtons() {
    this.showButtons = !this.showButtons;
  }

  _changeValue(i) {
    const newValue = this.value + i;
    if (newValue >= 1 && newValue <= 30) {
      this.value = newValue;
    }
    this.dispatchEvent(new CustomEvent('modifier-changed', {
      bubbles: true,
      composed: true,
      detail: {
        attr: this.id,
        modifier: this.getModifier()
      }
    }));
  }

  getModifier() {
    let modifier = CharacterAttribute.modifiers[this.value]
    return (modifier)
  }

  render() {
    return html`
        <div class="attributeWrapper">
            <p><span class="name">${this.name}</span></p>
            <span class="attributeAddRemove">
              ${this.showButtons ? html`<button @click=${() => this._changeValue(-1)}>-</button>` : ''}
              <span
                  class="value ${this.highlight ? 'highlighted' : ''}" 
                  @mouseenter="${this.mouseEnterAtribute}" 
                  @mouseleave="${this.mouseLeaveAtribute}" 
                  @click="${this.toggleButtons}"
              >
                ${this.value}
              </span>
              ${this.showButtons ? html`<button @click=${() => this._changeValue(1)}>+</button>` : ''}
            </span>
            <span class="modifier">${this.getModifier()}</span>
        </div>
    `;
  }
}
customElements.define('character-attribute', CharacterAttribute);