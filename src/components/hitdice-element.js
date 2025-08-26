import { LitElement, html, css } from 'lit-element';

class HitDice extends LitElement {

    static styles = css`
    .wrapper{
        border: 3px solid lightblue;
        background-color: white;
        font-family: "Roboto Condensed", sans-serif;
        height: 110px;
        margin: 10px;
        margin-top: 20px;
        width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position:relative
    }
    .title{
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 5px;
        width: 95%;
    }
    .hitdice{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .label{
        width: 90px;
        text-align: center;
        font-weight: bold;
        color: gray;
    }
    .field{
        font-family: "Roboto Condensed", sans-serif;
        resize: none;
        margin: 5px;
        height: 40px;
        border: none;
        border: solid 1px gray;
        border-radius: 5px;
        width: 130px;
        text-align: center;
        font-size: 32px;
        font-weight: bold;
    }
    .hitDiceRow{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    `;
    static get properties() {
        return{
            hitDice: {type: Object}
        }
    };

    constructor() {
        super();
        this.hitDice = JSON.parse(localStorage.getItem('hitDice') || '{}');
    }

    onCurrentBlur(id, value){
        this.hitDice = {
            ...this.hitDice,
            [id]: value
        };
        localStorage.setItem('hitDice', JSON.stringify(this.hitDice));
    }

    onMaxBlur(id, value){
        this.hitDice = {
            ...this.hitDice,
            [id]: value
        };
        localStorage.setItem('hitDice', JSON.stringify(this.hitDice));
    }

    render() {
        return html`
    <div class="wrapper">
        <span class="hitDiceRow">
            <div class="hitdice">
                <label for="currentDice" class="label">NYKYINEN</label>
                <textarea id="currentDice" class="field" spellcheck="false" @blur="${e => this.onCurrentBlur(e.target.id, e.target.value)}" .value="${this.hitDice.currentDice || ''}"></textarea>
            </div>
            <div class="hitdice">
                <label for="maxDice" class="label">MAKSIMI</label>
                <textarea id="maxDice" class="field" spellcheck="false" @blur="${e => this.onMaxBlur(e.target.id, e.target.value)}" .value="${this.hitDice.maxDice || ''}"></textarea>
            </div>
        </span>
        <p class="title">OSUMANOPAT</p>
    </div>
    `;
    }
}
customElements.define('hitdice-element', HitDice);