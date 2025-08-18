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
        flex-direction: row;
        justify-content: center;
        position:relative
    }
    .title{
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 5px;
        font-weight: bold;
    }
    `;
    static properties = {
    };

    constructor() {
        super();
    }
    render() {
        return html`
    <div class="wrapper">
            <p class="title">OSUMANOPAT</p>
        </div>
    </div>
    `;
    }
}
customElements.define('hitdice-element', HitDice);