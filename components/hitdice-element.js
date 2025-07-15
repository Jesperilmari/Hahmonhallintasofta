import { LitElement, html, css } from 'lit-element';

class HitDice extends LitElement {

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
        showButtonsAc: { type: Boolean }
    };

    constructor() {
        super();
        this.highlightAc = false;
        this.highlightShield = false;
        this.ac = 10;
        this.shield = 12;
        this.showButtonsAc = false;
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

    _changeAc(i) {
        const newAc = this.ac + i;
        this.ac = newAc;
    }

    render() {
        return html`
    <div class="wrapper">
        <div class="acBorder">
            Osumanopat
        </div>
    </div>
    `;
    }
}
customElements.define('hitdice-element', HitDice);