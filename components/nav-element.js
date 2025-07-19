import { LitElement, html, css } from 'lit-element';
import { Router } from '@vaadin/router';

class Nav extends LitElement {

  static styles = css`
  .bar{
    width: 100%;
    height: 50px;
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
    background-color: transparent;
    border: none;
  }
  .wrapper.highlighted{
    background-color: #1d4062;
    border-radius: 5px;
  }
  .navbutton{
    font-family: "Roboto Condensed", sans-serif;
    font-size: 15px;
    font-weight: bold;
    color: white;
  }
  .icon{
    height:20px;
    color: white;
    margin-right: 2px;
  }
  `;
  static properties = {
    highlightHome: { type: Boolean },
    highlightSpells: { type: Boolean },
    highlightWeapons: { type: Boolean },
  };

  constructor() {
    super();
    this.highlightHome = false;
    this.highlightSpells = false;
    this.highlightWeapons = false;
  }

  render() {
    return html`
    <div class="bar">
      <button class="wrapper ${this.highlightHome ? 'highlighted' : ''}" 
        @click=${() => Router.go('/')}
        @mouseenter=${() => this.highlightHome = true}
        @mouseleave=${() => this.highlightHome = false}
      >
        <div class="navbutton">
          <img src="./icons/scroll.png" class="icon">
          HAHMOLOMAKE
        </div>
      </button>

      <button class="wrapper ${this.highlightSpells ? 'highlighted' : ''}" 
        @click=${() => Router.go('/spells')}
        @mouseenter=${() => this.highlightSpells = true}
        @mouseleave=${() => this.highlightSpells = false}
      >
        <div class="navbutton">
          <img src="./icons/spell.png" class="icon">
          LOITSUT
        </div>
      </button>
      <button class="wrapper ${this.highlightWeapons ? 'highlighted' : ''}" 
        @click=${() => Router.go('/weapons')}
        @mouseenter=${() => this.highlightWeapons = true}
        @mouseleave=${() => this.highlightWeapons = false}
      >
        <div class="navbutton">
          <img src="./icons/sword.png" class="icon">
          ASEET
        </div>
      </button>
    </div>
  `;
  }
}
customElements.define('nav-element', Nav);