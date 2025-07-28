import { LitElement, html, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

class SavingThrows extends LitElement {

  static styles = css`
  .saveWrapper{
    position: relative;
    border: 1px solid lightblue;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 110px;
    height: 30px;
    margin-top: 10px;
    margin-left: 20px;
    margin-bottom: 0px;
    border-radius: 25px;
    padding: 0px;
  }
  .toggleproficiency{
    width: 12px;
    height: 12px;
    border: 1px dotted black;
    border-radius: 15px;
    margin-left: 15px;
    margin-right: 15px;
    background-color: white;
    padding:0px;
    flex-shrink: 0;
  }
  .modifier{
    position: absolute;
    right: -17.5px;
    background-color:white;
    top: 50%;
    transform: translateY(-50%);
    border: 1px solid lightblue;
    width:35px;
    height:35px;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    padding:0px;
    margin-left:10px;
  }
  .ominaisuusTitle{
    margin:0px;
    padding:0px;
    flex-shrink: 0;
    white-space: nowrap;
  }
  .firstRow {
  display: flex;
  flex-direction: row;
  }
  .secondRow{
    margin-top: 10px;
    margin-left: 90px;
    font-weight:bold;
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
  }

  render() {
    return html`   
    <div class="border">
      <div class="firstRow">
        <div class="firstColumn">
          <div class="saveWrapper">
            <span
              class=${classMap({
                toggleproficiency: true,
                highlighted: this.highlightProficiency,
                toggled: this.toggleProficiency
              })}
              @mouseenter=${this.mouseEnterProficiencyBtn}
              @mouseleave=${this.mouseLeaveProficiencyBtn}
              @click=${this.clickProficiencyBtn}
              title="Toggle proficiency"
></span>  
            <p class="ominausuusTitle">${this.attr}</p>
            <span class="modifier">${this.bonus >= 0 ? `+${this.bonus}` : this.bonus}</span>
          </div>
        </div>
    </div>
  </div>
    `;
  }
}
customElements.define('savingthrows-element', SavingThrows);