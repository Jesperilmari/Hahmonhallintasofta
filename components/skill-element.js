import { LitElement, html, css } from 'lit-element';

class Skill extends LitElement {

  static styles = css`
    .mainWrapper{
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    padding: 0px;
    font-family: "Roboto Condensed", sans-serif;
  }
  .skillwrapper{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100px;
    margin: 0px;
    padding: 0px;
  }
  .toggleproficiency{
    width: 12px;
    height: 12px;
    border: 1px dotted black;
    border-radius: 15px;
    margin-left: 15px;
    margin-right: 15px;
  }
  .attr{
    font-weight: bold;
    width: 50px;
    margin: 0px;
    padding: 0px;
    font-size: 16px;
    color: #696969;

  }
  .name{
    border-bottom: 1px solid gray;
    width: 125px;
    margin: 0px;
    padding: 0px;
  }
  .modifier{
    width: 50px;
    height: 25px;
    border: 1px solid gray;
    border-radius: 5px;
    margin: 0px;
    margin-left: 15px;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 1.25rem;
  }
  .toggleproficiency.highlighted{ 
    background-color: lightgray;
  }
  .toggleproficiency.toggled{
    background-color: black;
  }

  `;
  static properties = {
    name: { type: String },
    attr: { type: String },
    bonus: { type: String },
    highlightProficiency: { type: Boolean},
    toggleProficiency : {type: Boolean}
  };

  constructor() {
    super();
    this.highlightProficiency = false;
  }

  firstUpdated() {
  }

  connectedCallback() {
  super.connectedCallback();
  window.addEventListener('attributes-ready', this._updateBonus);
  window.addEventListener('modifier-changed', this._handleModifierChanged);
}

disconnectedCallback() {
  window.removeEventListener('attributes-ready', this._updateBonus);
  window.removeEventListener('modifier-changed', this._handleModifierChanged);
}

  _handleModifierChanged = (e) => {
  const { attr, modifier } = e.detail;
  if (attr === this.attr) {
    this.bonus = modifier;
  }
};

  mouseEnterProficiencyBtn() {
    this.highlightProficiency = true;
  }
  mouseLeaveProficiencyBtn() {
    this.highlightProficiency = false;
  }
  clickProficiencyBtn(){
      this.toggleProficiency = !this.toggleProficiency;
  }

  _updateBonus = () => {
  const attrEl = document.querySelector(`#${this.attr}`);
  if (attrEl && typeof attrEl.getModifier === 'function') {
    this.bonus = attrEl.getModifier();
  } else {
    console.warn(`Could not find attribute element with id: ${this.attr}`);
  }
};

  calculateBonus(characterAttribute) {
  const modifier = characterAttribute.getModifier();
  console.log(`${this.attr} modifier: ${modifier}`);
  this.bonus = modifier;
}

  render() {
    return html`
    <span class="mainWrapper"> 
      <span class="skillwrapper">
        <div class="toggleproficiency ${this.highlightProficiency ? 'highlighted' : ''} ${this.toggleProficiency ? 'toggled' : ''}"
        @mouseenter="${this.mouseEnterProficiencyBtn}"
        @mouseleave="${this.mouseLeaveProficiencyBtn}" 
        @click="${this.clickProficiencyBtn}"
        ></div>
        <p class="attr">${this.attr}</p>
      </span>
      <p class="name">${this.name}</p>
      <p class="modifier">${this.bonus}</p>
  </span> 
    `;
  }
}
customElements.define('skill-element', Skill);