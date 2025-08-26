import { LitElement, html, css } from 'lit-element';

class senses extends LitElement {

  static styles = css`
  .border {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 3px solid lightblue;
    border-radius: 10px;
    background-color: white;
    font-family: "Roboto Condensed", sans-serif;
    width: 300px;
  }
  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: bold;
    position: relative;
    margin-top: 3px;
    margin-bottom: 3px;
    transform: translateX(+6%);
  }
  .title {
    width: 220px;
    border: 3px solid lightblue;
    background-color: white;
    border-radius: 10px;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: bold;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    padding-right: 20px; 
  }
  .num {
    border: 3px solid #add8e6;
    background-color: white;
    border-radius: 40px;
    width: 60px;
    height: 40px;
    font-size: 20px;
    font-family: "Roboto Condensed", sans-serif;
    line-height: 30px;
    text-align: center;
    font-weight: bold;
    resize: none;
    overflow: hidden;
    box-sizing: border-box;
    padding: 0;
    transform: translateX(-50%);
  }
  `;

  static get properties() {
    return {
      senses: { type: Object },
    };
  }

  constructor() {
    super();
    this.senses = JSON.parse(localStorage.getItem('senses') || '{}');
  }

  onBlur(id, value) {
    this.senses = {
      ...this.senses,
      [id]: value,
    };
    localStorage.setItem('senses', JSON.stringify(this.senses));
  }

render() {
  return html`
    <div class="border"> 
      <div class="wrapper">
        <div class="title">
        PASSIIVINEN TARKKAAVAISUUS
        </div>
        <textarea id="passiivinenTarkkaavaisuus" class="num" rows="1" @blur="${(e) => this.onBlur(e.target.id, e.target.value)}" .value="${this.senses.passiivinenTarkkaavaisuus || ''}"></textarea>
      </div>
      <div class="wrapper">
        <div class="title">
        ALOITE
        </div>
        <textarea id="aloite" class="num" rows="1" @blur="${(e) => this.onBlur(e.target.id, e.target.value)}" .value="${this.senses.aloite || ''}"></textarea>
      </div>
      <div class="wrapper">
        <div class="title">
        PIMEÄNÄKÖ
        </div>
        <textarea id="pimeänäkö" class="num" rows="1" @blur="${(e) => this.onBlur(e.target.id, e.target.value)}" .value="${this.senses.pimeänäkö || ''}"></textarea>
      </div>
      AISTIT
    </div>

    `;
}
}
customElements.define('senses-element', senses);