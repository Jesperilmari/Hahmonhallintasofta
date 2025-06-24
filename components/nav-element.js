import { LitElement, html, css } from 'lit-element';

class Nav extends LitElement {

  static styles = css`
  .bar{
    width: 100%;
    height: 40px;
    background-color: #13293D;
    border-bottom: 1px solid;
    border-color: white;
    display: flex;
    align-items: center;
    justify-content: left;
  }
  .wrapper{
    display: flex;
    align-items: center;
    margin: 10px;
    padding: 8px;
  }
  .wrapper.highlihted{
    background-color: lightgray;
  }
  .navbutton{
    font-family: "Roboto Condensed", sans-serif;
    font-size: 15px;
    font-weight: bold;
    color: white;
  }
  .scrollIcon{
    height:20px;
    color: white;
    margin-right: 2px;
  }
  `;
  static properties = {
    highlight: { type: Boolean }
  };
  constructor() {
    super();
    this.highlightSheet
    this.highlightSpells
  }
  navigateToSheet(){
  }
  navigateToSpells(){
  }
  mouseEnter() {
    this.highlight = true;
  }
  mouseLeave() {
    this.highlight = false;
  }

  render() {
    return html`
      <div class="bar">
        <div class="wrapper ${this.highlight ? 'highlighted' : ''}" 
        @click=${this.navigateToSheet}
        @mouseenter="${this.mouseEnter}"
        @mouseleave="${this.mouseLeave}" >  
          <div class="navbutton">
            <img src="./icons/scroll.png" class="scrollIcon">
            HAHMOLOMAKE
          </div>
        </div>
        <div class="wrapper" @click=${this.navigateToSpells}>  
          <div class="navbutton">
            <img src="./icons/spell.png" class="scrollIcon">
            TAIJAT
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('nav-element', Nav);