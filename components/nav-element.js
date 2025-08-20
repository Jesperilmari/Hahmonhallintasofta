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
  .options{
    display: flex;
    flex-direction: row;
    margin-left: auto;
  }
  input[type="file"] {
      display: none;
    }
  `;
  static properties = {
    highlightHome: { type: Boolean },
    highlightSpells: { type: Boolean },
    highlightWeapons: { type: Boolean },
    highlightSave: { type: Boolean },
    highlightUpload: { type: Boolean },
  };

  constructor() {
    super();
    this.highlightHome = false;
    this.highlightSpells = false;
    this.highlightWeapons = false;
    this.highlightSave = false;
    this.highlightUpload = false;
  }

  firstUpdated() {
    this.fileInput = this.renderRoot.querySelector('#fileInput');
    this.fileInput.addEventListener('change', (e) => this.handleFile(e));
  }

  handleFile(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);

        Object.keys(data).forEach((key) => {
          localStorage.setItem(key, data[key]);
        });
        window.location.reload();
      } catch (err) {
        alert('Invalid JSON file.');
      }
    };
    reader.readAsText(file);
    event.target.value = '';
  }

  exportData() {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      data[key] = localStorage.getItem(key);
    }

    const jsonStr = JSON.stringify(data, null, 2);

    const blob = new Blob([jsonStr], { type: "application/json" });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Hahmolomake.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  openFileDialog() {
    this.fileInput.click();
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
      <span class="options">
          <input id="fileInput" type="file"/>
          <button class="wrapper ${this.highlightUpload ? 'highlighted' : ''}" @click=${this.openFileDialog}
              @mouseenter=${() => this.highlightUpload = true}
              @mouseleave=${() => this.highlightUpload = false}>
            <div class="navbutton">
              <img src="./icons/uploadfile.png" class="icon">
              AVAA TIEDOSTO
            </div>
          </button>
          <button class="wrapper ${this.highlightSave ? 'highlighted' : ''}" @click=${this.exportData}
              @mouseenter=${() => this.highlightSave = true}
              @mouseleave=${() => this.highlightSave = false}>
            <div class="navbutton">
              <img src="./icons/save.png" class="icon">
              TALLENNA NIMELLÄ
            </div>
          </button>
      </span>
    </div>
  `;
  }
}
customElements.define('nav-element', Nav);