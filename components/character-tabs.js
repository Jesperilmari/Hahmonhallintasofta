import { LitElement, html, css } from 'lit-element';
import '../../components/weapons-element.js';

class CharacterTabs extends LitElement {
    static styles = css`
    .wrapper{
        border: 3px solid lightblue;
        background-color: white;
        font-family: "Roboto Condensed", sans-serif;
        padding: 0;
        margin: 0;
        width: 100%;
        height: 890px;
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
    render() {
        return html`
        <div class="wrapper">
            <div class="navigation">
                <button class="navBtn">ASEET</button>
                <button class="navBtn">LOITSIMINEN</button>
                <button class="navBtn">VARUSTELUETTELO</button>
                <button class="navBtn">HAHMOLUOKKA & POLKU</button>
                <button class="navBtn">LAJI & TAUSTA</button>
                <button class="navBtn">MUISTIINPANOT</button>
            </div>
            <weapons-element></weapons-element>
        </div>
        `
    }
}
customElements.define('character-tabs', CharacterTabs);