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
        height: 25px;
        display: flex;
        flex-grow: 2;
        border: solid red;
    }
    `
    render() {
        return html`
        <div class="wrapper">
            <div class="navigation">
                <button>ASEET</button>
                <button>TAIJAT</button>
            </div>
        </div>
        `
    }
}
customElements.define('character-tabs', CharacterTabs);