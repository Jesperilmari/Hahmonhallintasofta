import { LitElement, html, css } from 'lit-element';

class proficiencyBonus extends LitElement {

  static styles = css`
  .wrapper{
    display: flex;
      flex-direction: column;
      justify-content: center;
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
  .title{
    font-size: 16px;
    font-weight: bold;
  }
  .bonus{
    font-size: 30px;
    border: solid darkgray 1px;
    width: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 5px;
    border-radius: 10px
  }
  .bonus.highlighted{
      background-color: lightgray;
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
      z-index: 10;
    position: relative;  
  }
  .buttonsRow{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  `;
  static properties = {
    bonus: {type : Number},
    highlight: { type: Boolean },
    showButtons: { type: Boolean }
  };

  constructor() {
    super();
    this.highlight = false;
    this.bonus = JSON.parse(localStorage.getItem('proficiencyBonus') || '2');;
    this.showButtons = false;
  }
  
  firstUpdated(){
    this.dispatchEvent(new CustomEvent('proficiency-changed', {
    detail: { value: this.bonus },
    bubbles: true,
    composed: true
  }));
  }

  mouseEnter() {
    this.highlight = true;
  }
  mouseLeave() {
    this.highlight = false;
  }
  toggleButtons() {
    this.showButtons = !this.showButtons;
  }
  changeValue(i) {
    this.bonus += i;

    this.dispatchEvent(new CustomEvent('proficiency-changed', {
      detail: {value: this.bonus},
      bubbles: true,
      composed: true
    }));
    localStorage.setItem('proficiencyBonus', JSON.stringify(this.bonus));
  }

  getProficiencyBonus(){
    return(this.bonus)
  }
    

  render() {
    return html`
      <div class="wrapper">
        <span class="title">PÄTEVYYS</span>
        <span class="buttonsRow">
        ${this.showButtons ? html`<button @click=${() => this.changeValue(-1)}>-</button>` : ''}
        <span class="bonus ${this.highlight ? 'highlighted' : ''}" 
        @mouseenter="${this.mouseEnter}"
        @mouseleave="${this.mouseLeave}"
        @click="${this.toggleButtons}"
        >+${this.bonus}</span>
        ${this.showButtons ? html`<button @click=${() => this.changeValue(1)}>+</button>` : ''}
        </span>
        <span class="title">BONUS</span>
      </div>
    `;
  }
}
customElements.define('proficiency-bonus', proficiencyBonus);