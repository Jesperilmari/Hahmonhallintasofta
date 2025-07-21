import { LitElement, html, css } from 'lit';
export class RaceNbg extends LitElement {
    static styles = css`
    .wrapper{
        display: flex;
        flex-direction: column;
        font-family: "Roboto Condensed", sans-serif;
        margin-bottom: 10px;
    }
    .label{
        margin: 10px;
    }
    .title{
        margin: 10px;
        margin-bottom: 0px;
        font-weight: bold;
    }
    .field{
        margin-left: 5px;
        margin-right: 5px;
        height: 20px;
        border: none;
        border-bottom: solid 1px black;
        padding: 5px;
        font-family: "Roboto Condensed", sans-serif;
        font-size: 15px;
        width: 75%;
    }
    .addBtn{
        border: none;
        border-radius: 20px;
        padding: 0;
        margin: 0;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25px;
        height: 25px;
        vertical-align: middle;
        padding-bottom: 4px;
        padding-left: 1px;
        margin: 5px;
        margin-left: 10px;
    }
    `
    static properties = {
        showAddTrait: { type: Boolean}
    }

    constructor(){
        super();
        this.showAddTrait = false;
    }

    handleShowAddTrait(){
        this.showAddTrait = true;
        if(showAddTrait){
            return html``;
        }
    }
    render(){
        return html`
            <section class="wrapper">
                <p class="title">YLEISTIETO</p>
                <label for="name" class="label">Nimi</label>
                <input type="text" id="name" class="field">
                <label for="alignment" class="label">Vakaumus</label>
                <input type="text" id="alignment" class="field">
                <label for="race" class="label">Laji</label>
                <input type="text" id="race" class="field">
            </section>
            <section>
                <p class="title">LAJIN PIIRTEET</p>
                <button type="button" @click="${this.handleShowAddTrait}" class="addBtn">+</button>
            </section>
            <section class="wrapper">
                <p class="title">ULKONÄKÖ</p>
                <label for="ikä" class="label">Ikä</label>
                <input type="text" id="ikä" class="field">
                <label for="pituus" class="label">Pituus</label>
                <input type="text" id="pituus" class="field">
                <label for="paino" class="label">Paino</label>
                <input type="text" id="paino" class="field">
                <label for="silmät" class="label">Silmät</label>
                <input type="text" id="silmät" class="field">
                <label for="hiukset" class="label">Hiukset</label>
                <input type="text" id="hiukset" class="field">
                <label for="iho" class="label">Iho</label>
                <input type="text" id="iho" class="field">
                <label for="tuntomerkit" class="label">Tuntomerkit</label>
                <input type="text" id="tuntomerkit" class="field">
                <label for="vaatetus" class="label">Vaatetus</label>
                <input type="text" id="vaatetus" class="field">
                <label for="muuta" class="label">Muuta</label>
                <input type="text" id="muuta" class="field">
            </section>
        `;
    }
}
customElements.define('racenbg-element', RaceNbg);