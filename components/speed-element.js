import { LitElement, html, css } from 'lit-element';

class speed extends LitElement {

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
  .speed{
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
  .speed.highlighted{
    background-color: lightgray;
  }
  .buttonsRow{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  `;
  static properties = {
    speed: { type: Number },
    highlight: { type: Boolean },
    showButtons: { type: Boolean }
  };

  constructor() {
    super();
    this.highlight = false;
    this.speed = 12;
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
    const newValue = this.speed + i;
    this.speed = newValue;
  }

  render() {
    return html`
      <div class="wrapper">
        <span class="title">NOPEUS</span>
        <span class="buttonsRow">
          ${this.showButtons ? html`<button @click=${() => this._changeValue(-1)}>-</button>` : ''}
          <span class="speed ${this.highlight ? 'highlighted' : ''}"
          @mouseenter="${this.mouseEnter}"
          @mouseleave="${this.mouseLeave}"
          @click="${this.toggleButtons}"
          >
          ${this.speed}m</span>
          ${this.showButtons ? html`<button @click=${() => this._changeValue(1)}>+</button>` : ''}
        </span>
        <span class="title">KÄVELLEN</span>
      </div>
    `;
  }
}
customElements.define('speed-element', speed);