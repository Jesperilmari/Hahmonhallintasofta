import { LitElement, html, css } from 'lit-element';

class Heropoint extends LitElement {

  static styles = css`
    .wrapper{
      height: 100px;
      width: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .heropoint{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .value{
      font-family: "Roboto Condensed", sans-serif;
      font-size: 50px;
      font-weight: bold;
      border: 2px solid lightblue;
      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 75px;
      height: 60px;
      border-radius: 5px;
    }
    .title{
      font-family: "Roboto Condensed", sans-serif;
      font-weight: bold;
      padding: 0px;
      margin: 0px;
      margin-top: 5px;
      text-shadow: -1px -1px 0 #ffffff, 1px -1px#ffffff, -1px 1px#ffffff, 1px 1px 0 #ffffff;
    }
    .value.highlighted{
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
  `;
  static properties = {
    heropoint: { type: Number },
    highlight: { type: Boolean },
    showButtons: { type: Boolean }
  };
  constructor() {
    super();
    this.highlight = false;
    this.heropoint = 1;
    this.showButtons = false;
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
  _changeValue(i) {
    const newValue = this.heropoint + i;
    this.heropoint = newValue;
  }

  render() {
    return html`
    <div class="wrapper">
      <span class="heropoint">
      ${this.showButtons ? html`<button @click=${() => this._changeValue(-1)}>-</button>` : ''}
      <div class="value ${this.highlight ? 'highlighted' : ''}"
      @mouseenter="${this.mouseEnter}"
      @mouseleave="${this.mouseLeave}"
      @click="${this.toggleButtons}"
      >
        ${this.heropoint}
      </div>
      ${this.showButtons ? html`<button @click=${() => this._changeValue(1)}>+</button>` : ''}
      </span>
      <p class="title">SANKARIPISTE</p>
      
  </div>    
    `;
  }
}
customElements.define('heropoint-element', Heropoint);