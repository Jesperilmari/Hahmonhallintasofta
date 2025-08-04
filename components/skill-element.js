import { LitElement, html, css } from 'lit-element';

class Skill extends LitElement {
  static styles = css`
    .mainWrapper {
      display: flex;
      flex-direction: row;
      margin-bottom: 10px;
      padding: 0px;
      font-family: "Roboto Condensed", sans-serif;
    }
    .skillwrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100px;
      margin: 0px;
      padding: 0px;
    }
    .toggleproficiency {
      width: 12px;
      height: 12px;
      border: 1px dotted black;
      border-radius: 15px;
      margin-left: 15px;
      margin-right: 15px;
      cursor: pointer;
    }
    .attr {
      font-weight: bold;
      width: 50px;
      margin: 0px;
      padding: 0px;
      font-size: 16px;
      color: #696969;
    }
    .name {
      border-bottom: 1px solid gray;
      width: 125px;
      margin: 0px;
      padding: 0px;
    }
    .modifier {
      width: 50px;
      height: 25px;
      border: 1px solid gray;
      border-radius: 5px;
      margin: 0px;
      margin-left: 15px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-size: 1.25rem;
    }
    .toggleproficiency.highlighted {
      background-color: lightgray;
    }
    .toggleproficiency.toggled {
      background-color: black;
    }
  `;

  static properties = {
    name: { type: String },
    attr: { type: String },
    bonus: { type: Number, state: true },
    highlightProficiency: { type: Boolean, state: true },
    toggleProficiency: { type: Boolean },
    proficiencyBonus: { type: Number },
    baseModifier: { type: Number, state: true }
  };

  constructor() {
    super();
    this.highlightProficiency = false;
    this.toggleProficiency = false;
    this.proficiencyBonus = 0;
    this.bonus = 0;
    this.baseModifier = 0;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('attributes-ready', this.updateBaseModifier);
    window.addEventListener('modifier-changed', this.onModifierChanged);
    window.addEventListener('proficiency-changed', this.onProficiencyChanged);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('attributes-ready', this.updateBaseModifier);
    window.removeEventListener('modifier-changed', this.onModifierChanged);
    window.removeEventListener('proficiency-changed', this.onProficiencyChanged);
  }

  firstUpdated() {
    this.updateBaseModifier();
    this.toggleProficiency = this.loadProficiencyState(this.name);
    this.recalculateBonus();
  }

  updateBaseModifier = () => {
    const attrEl = document.querySelector(`#${this.attr}`);
    if (attrEl && typeof attrEl.getModifier === 'function') {
      this.baseModifier = attrEl.getModifier();
      this.recalculateBonus();
    } else {
      console.warn(`Skill Element: No attribute element found with id ${this.attr}`);
    }
  };

  onModifierChanged = (e) => {
    if (e.detail.attr === this.attr) {
      this.baseModifier = e.detail.modifier;
      this.recalculateBonus();
    }
  };

  onProficiencyChanged = (e) => {
    this.proficiencyBonus = e.detail.value;
    this.recalculateBonus();
  };

  recalculateBonus() {
    const modifier = Number(this.baseModifier);
    const proficiencyBonus = Number(this.proficiencyBonus);
    this.bonus = modifier + (this.toggleProficiency ? proficiencyBonus : 0);
  }

  mouseEnterProficiencyBtn() {
    this.highlightProficiency = true;
  }

  mouseLeaveProficiencyBtn() {
    this.highlightProficiency = false;
  }

  clickProficiencyBtn() {
    this.toggleProficiency = !this.toggleProficiency;
    this.recalculateBonus();
    this.saveProficiencyState(this.name, this.toggleProficiency);
  }

  saveProficiencyState(name, value) {
    const stored = JSON.parse(localStorage.getItem('skills')) || {};
    stored[name] = value;
    localStorage.setItem('skills', JSON.stringify(stored));
  }
  loadProficiencyState(name) {
    const stored = JSON.parse(localStorage.getItem('skills')) || {};
    return stored[name] ?? false;
  }

  render() {
    return html`
      <span class="mainWrapper">
        <span class="skillwrapper">
          <div
            class="toggleproficiency ${this.highlightProficiency ? 'highlighted' : ''} ${this.toggleProficiency ? 'toggled' : ''}"
            @mouseenter="${this.mouseEnterProficiencyBtn}"
            @mouseleave="${this.mouseLeaveProficiencyBtn}"
            @click="${this.clickProficiencyBtn}"
            title="Toggle proficiency"
          ></div>
          <p class="attr">${this.attr}</p>
        </span>
        <p class="name">${this.name}</p>
        <p class="modifier">${this.bonus >= 0 ? `+${this.bonus}` : this.bonus}</p>
      </span>
    `;
  }
}

customElements.define('skill-element', Skill);
