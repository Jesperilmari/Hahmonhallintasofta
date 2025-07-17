import { LitElement, html, css } from 'lit-element';

class Weapons extends LitElement {
    static styles = css`
    .titlesWrapper{
        display: flex;
        flex-direction: row;
    }
    .titles{
        margin: 10px;
    }
    `;
    render() {
        return html`
            <div class="titlesWrapper">
                <p class="titles">ASE</p>
                <p class="titles">VAHINKO</p>
                <p class="titles">HYÖKKÄYSBONUS</p>
                <p class="titles">VAHINKOTYYPPI</p>
                <p class="titles">OMINAISUUDET</p>
            </div>
        `;
    }
}
customElements.define('weapons-element', Weapons);