import { LitElement, html, css } from 'lit-element';

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
        flex-direction: row;
        flex: 1 1 100%;
    }
    .navigation{
        width: 100%;
        height: 40px;
        display: flex;
        align-items: flex-start;
        flex-grow: 2;
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
                <button class="navBtn">LAJI & TAUSTA</button>
                <button class="navBtn">MUISTIINPANOT</button>
            </div>
        </div>
        `
    }
}
customElements.define('character-tabs', CharacterTabs);