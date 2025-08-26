import { LitElement, html, css } from 'lit-element';

class Armorclass extends LitElement {

    static styles = css`
    .wrapper{
        border: 3px solid lightblue;
        background-color: white;
        font-family: "Roboto Condensed", sans-serif;
        height: 110px;
        padding: 0;
        margin: 10px;
        width: 300px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        position:relative
    }
    .acBorder{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 10px;
        width: 260px;
        border-radius: 10px;
    }
    .title{
        font-weight: bold;
        margin-bottom: 10px;
        position: absolute;
        transform: translateY(-200%); 
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
    
    .buttonPos{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: absolute;
    }
    .ac{
        font-weight: bold;
        font-size: 50px;
        border: 1px solid lightgray;
        width: 90px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .ac.highlighted{
        background-color: lightgray;
    }
    .shield{
        font-weight: bold;
        font-size: 50px;
        border: 1px solid lightgray;
        width: 90px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .shield.highlighted{
        background-color: lightgray;
    }
  `;
    static properties = {
        ac: { type: Number },
        shield: { type: Number },
        highlightAc: { type: Boolean },
        highlightShield: { type: Boolean },
        showButtonsAc: { type: Boolean },
        showButtonsShield: { type: Boolean }
    };

    constructor() {
        super();
        this.highlightAc = false;
        this.highlightShield = false;
        this.ac = JSON.parse(localStorage.getItem('ac') || '10');
        this.shield = JSON.parse(localStorage.getItem('shield') || '12');
        this.showButtonsAc = false;
        this.showButtonsShield = false;
    }

    mouseEnterAc() {
        this.highlightAc = true;
    }
    mouseLeaveAc() {
        this.highlightAc = false;
    }

    mouseEnterShield() {
        this.highlightShield = true;
    }
    mouseLeaveShield() {
        this.highlightShield = false;
    }

    toggleButtonsAc() {
        this.showButtonsAc = !this.showButtonsAc;
    }

    toggleButtonsShield() {
        this.showButtonsShield = !this.showButtonsShield;
    }

    changeAc(i) {
        const newAc = this.ac + i;
        this.ac = newAc;
        localStorage.setItem('ac', JSON.stringify(this.ac));
    }

    changeShield(i) {
        const newShield = this.shield + i;
        this.shield = newShield;
        localStorage.setItem('shield', JSON.stringify(this.shield));
    }

    render() {
        return html`
    <div class="wrapper">
        <div class="acBorder">
            <span class="title">PUOLUSTUS</span>
            <span class="buttonPos">
            ${this.showButtonsAc ? html`<button @click=${() => this.changeAc(-1)}>-</button>` : ''}
            <span class="ac ${this.highlightAc ? 'highlighted' : ''}"
            @mouseenter="${this.mouseEnterAc}"
            @mouseleave="${this.mouseLeaveAc}"
            @click="${this.toggleButtonsAc}"
            >
            ${this.ac}</span>
            ${this.showButtonsAc ? html`<button @click=${() => this.changeAc(1)}>+</button>` : ''}
            </span>
        </div>
        <div class="acBorder">
            <span class="title">KILVELLÄ</span>
            <span class="buttonPos">
            ${this.showButtonsShield ? html`<button @click=${() => this.changeShield(-1)}>-</button>` : ''}
            <span class="shield ${this.highlightShield ? 'highlighted' : ''}"
            @mouseenter="${this.mouseEnterShield}"
            @mouseleave="${this.mouseLeaveShield}"
            @click="${this.toggleButtonsShield}"
            >
            ${this.shield}</span>
            ${this.showButtonsShield ? html`<button @click=${() => this.changeShield(1)}>+</button>` : ''}
            </span>
        </div>
    </div>
    `;
    }
}
customElements.define('ac-element', Armorclass);