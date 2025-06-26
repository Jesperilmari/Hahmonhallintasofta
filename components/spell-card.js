import { LitElement, html, css } from 'lit';

export class SpellCard extends LitElement {
    static styles = css`
        .card{
            display: flex;
            justify-content: start;
            align-items: start;
            color: black;
            font-size: 14px;
            border: 3px solid lightblue;
            margin: 10px;
            padding: 0px;
            border-radius: 10px;
            background-color: white;
            font-family: "Roboto Condensed", sans-serif; 
            width: 250px;
            padding: 10px;
            height: 350px;
        }
        .wrapper{
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            height: 100%;
        }
        .title{
            font-weight: bold;
            border-bottom: solid 1px;
        }
        .level{
            font-style: italic;
        }
        .title2{
            font-weight: bold;
        }
        .kuvaus {
            flex-grow: 1;   
            overflow-y: auto;
            padding-right: 5px;
            margin-top: 8px; 
        }
    `;

    static properties = {
        nimi: { type: String },
        loitsunPiiri: { type: String },
        loitsunKoulukunta: { type: String },
        loitsimisviive: { type: String },
        kantama: { type: String },
        komponentit: { type: String },
        kesto: { type: String },
        kuvaus: { type: String }
    };

    render() {
        return html`
        <div class="card">
            <div class="wrapper">
                <span class="title">${this.nimi}</span>
                <span class="level">
                    <span>${this.loitsunPiiri},</span>
                    <span>${this.loitsunKoulukunta}</span>
                </span>
                <span class="title2">Loitsimisviive: ${this.loitsimisviive}</span>
                <span class="title2">Kantama: ${this.kantama}</span>
                <span class="title2">Komponentit: ${this.komponentit}</span>
                <span class="title2">Kesto: ${this.kesto}</span>
                <span class="kuvaus">${this.kuvaus}</span>
            </div>
        </div>
    `;
    }
}
customElements.define('spell-card', SpellCard);