import { LitElement, html, css } from 'lit-element';
import './weapons-element.js';
import './raceNbg-element.js';
import './casting-element.js';
import './inventory-element.js';
import './character-class.js';
import './notes-element.js';

class CharacterTabs extends LitElement {
    static styles = css`
    .wrapper{
        border: 3px solid lightblue;
        background-color: white;
        font-family: "Roboto Condensed", sans-serif;
        padding: 0;
        margin: 0;
        width: 100%;
        height: 878px;
        max-width: 1075px;
        display: flex;
        flex-direction: column;
        flex: 1 1 100%;
        justify-items: start;
        overflow-y: auto;
    }
    .navigation{
        width: 100%;
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
    }
    .navBtn{
        font-family: "Roboto Condensed", sans-serif;
        font-size: 15px;
        font-weight: bold;
        color: black;
        margin: 5px;
        border: none;
        border-radius: 5px;
        padding: 5px;
    }
    `
    static properties = {
        currentView: { type: String },
    };

    constructor() {
        super();
        this.currentView = 'aseet';
    }

    setView(view) {
        this.currentView = view;
    }

    render() {
        return html`
        <div class="wrapper">
            <div class="navigation">
                <button class="navBtn" @click=${() => this.setView('aseet')}>ASEET</button>
                <button class="navBtn" @click=${() => this.setView('casting')}>LOITSIMINEN</button>
                <button class="navBtn" @click=${() => this.setView('inventory')}>VARUSTELUETTELO</button>
                <button class="navBtn" @click=${() => this.setView('class')}>HAHMOLUOKKA & POLKU</button>
                <button class="navBtn" @click=${() => this.setView('racenbg')}>HAHMO, LAJI & TAUSTA</button>
                <button class="navBtn" @click=${() => this.setView('notes')}>MUISTIINPANOT</button>
            </div>
            ${this.renderView()}
        </div>
        `
    }

    renderView() {
        switch (this.currentView) {
            case 'aseet':
                return html`<weapons-element><#/weapons-element>`;
            case 'racenbg':
                return html`<racenbg-element></racenbg-element>`;
            case 'casting':
                return html`<casting-element></casting-element>`;
            case 'inventory':
                return html`<inventory-element></inventory-element>`;
            case 'class':
                return html`<character-class></character-class>`;
            case 'notes':
                return html`<notes-element></notes-element>`;
            default:
                return html`<weapons-element><#/weapons-element>`;
        }
    }
}
customElements.define('character-tabs', CharacterTabs);