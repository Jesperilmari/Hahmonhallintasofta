import { LitElement, html, css } from 'lit';
export class CharacterClass extends LitElement {
    static styles = css`
        .wrapper{
            display: flex;
            flex-direction: column;
            font-family: "Roboto Condensed", sans-serif;
            margin-bottom: 10px;
        }
        .title{
            margin: 10px;
            margin-bottom: 0px;
            font-weight: bold;
        }
        .field{
            margin-left: 5px;
            flex-grow: 1;
            font-family: "Roboto Condensed", sans-serif;
            font-size: 17px;
            border: none;
            background: none;
            align-items: center;
            justify-content: center;
            resize: none;
            min-width: 10px;
            box-sizing: border-box;
            width: 75%;
            border-bottom: solid 1px;
            line-height: 20px;
            padding-left: 5px;
            overflow: hidden;
        }
        .statsRow {
            display: flex;
            flex-direction: row;
            align-items: last baseline;
            justify-content: center;
            box-sizing: border-box;
            flex-wrap: wrap;
            gap: 10px;
        }
        .stats {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left: 5px;
            margin-right: 5px;
            flex: 1 1 150px;
            min-width: 150px;
            box-sizing: border-box;
        }
        .statTextarea {
            font-family: "Roboto Condensed", sans-serif;
            width: 100%;
            resize: none;
            border-radius: 5px;
            border: solid 2px lightblue;
            text-align: center;
            font-weight: bold;
            box-sizing: border-box;
            line-height: 25px;
            font-size: 20px;
            margin: 0px;
            overflow: hidden;
        }
        .label{
            margin: 10px;
        }
        .xptitle {
            margin-left: 5px;
            margin-right: 5px;
            margin-bottom: 5px;
            margin-top: 10px;
            text-align: center;
            font-size: 17px;
        }
        .formTitle{
            font-weight: bold;
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: space-between;
        }
        .formAddBtn{
            font-family: "Roboto Condensed", sans-serif;
            font-size: 15px;
            font-weight: bold;
            color: black;
            margin-top: 5px;
            border: none;
            border-radius: 5px;
            padding: 5px;
            width: 150px;
        }
        .closeBtn{
            border: none;
            border-radius: 20px;
            padding: 0;
            margin: 0;
            font-size: 15px;
            font-weight:bold;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 25px;
            height: 25px;
            vertical-align: middle;
            padding-bottom: 2px;
            padding-left: 1px;
            display: flex;
            justify-self: end;
        }
        .desc{
            margin-left: 10px;
            border-left: solid lightgray 5px;
            padding: 5px;
            display: flex;
            flex-wrap: wrap;
            box-sizing: border-box;
            width: 100%;
        }
        .img{
            height: 20px;
            width: 20px;
            justify-self: end;
            padding-right: 10px;
        }
        .traitRow{
            display: flex;
            flex-direction: row;
            align-items: center;
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
        .traitFormWrapper{
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background: white;
            color: black;
            padding: 0.5rem;
            text-align: left;
            z-index: 9999;
            border-top: solid lightblue 2px;
            display: flex;
            flex-direction: column;
            align-items: left;
            justify-content: left;
            box-sizing: border-box
        }
        .textbox{
            font-family: "Roboto Condensed", sans-serif;
            width: 98%;
            height: auto;
            resize: none;
            margin-right: 10px;
        }
        .nimi{
            max-width: 500px;
            min-width: 100px;
        }
    `

    constructor() {
        super();
        this.showAddTrait = false;
        this.traits = JSON.parse(localStorage.getItem('traits') || '[]');
        this.showAddTrait = false;
        this.showAddPerk = false;
    }

    static get properties(){
        return{
            traits: { type: Array },
            showAddTrait: { type: Boolean },
            showAddPerk: { type: Boolean},
        }
    }

    firstUpdated() {
        this.resizeAllTextareas();
        this.shadowRoot.addEventListener('input', event => {
            if (event.target.tagName === 'TEXTAREA') {
                this.resizeTextarea(event.target);
            }
        });
    }

    handleShowAddTrait() {
        this.showAddTrait = true;
    }

    handleShowAddPerk() {
        this.showAddPerk = true;
    }

    closeAddTrait() {
        this.showAddTrait = false;
    }

    closeAddPerk() {
        this.showAddPerk = false;
    }

    resizeAllTextareas() {
        const textareas = this.renderRoot.querySelectorAll('textarea');
        for (const textarea of textareas) {
            this.resizeTextarea(textarea);
        }
    }

    resizeTextarea(textarea) {
        textarea.style.height = 'auto';
        const lineHeight = parseInt(window.getComputedStyle(textarea).lineHeight);
        textarea.style.height = lineHeight + 'px';
        if (textarea.scrollHeight > lineHeight) {
            textarea.style.height = textarea.scrollHeight + 'px';
        }
    }

    render(){
        return html`
            <section class="wrapper">
                <div class="statsRow">
                    <div class="stats">
                        <span class="xptitle">KOKEMUSTASO</span>
                        <textarea
                        id="loitsimisominaisuus"
                        class="statTextarea"
                        rows="1"
                        spellcheck="false"
                        ></textarea>
                    </div>
                    <div class="stats">
                        <span class="xptitle">KOKEMUSPISTEET</span>
                        <textarea
                        id="VA"
                        class="statTextarea"
                        rows="1"
                        ></textarea>
                    </div>
                    <div class="stats">
                        <span class="xptitle">SEURAAVA KOKEMUSTASO</span>
                        <textarea
                        id="hyökkäysmuuttuja"
                        class="statTextarea"
                        rows="1"
                        ></textarea>
                    </div>
                </div>
                <p class="title">HAHMOLUOKKA</p>
                <textarea id="class" class="field" spellcheck="false"></textarea>
                <p class="title">POLKU</p>
                <textarea id="path" class="field" spellcheck="false"></textarea>
                <section>
                    <p class="title">HAHMOLUOKAN PIIRTEET</p>
                    <div>
                        ${this.traits.map((trait) => html`
                            <p class="secondaryTitle"></p>
                            <div class="traitRow">
                                <p class="desc">${trait.traitDesc}</p>
                                <img src="../icons/trash.png" class="img">
                            </div>
                        `)}
                    </div>
                    <button type="button" @click="${this.handleShowAddTrait}" class="addBtn">+</button>
                </section>
                <section>
                    <p class="title">VALTIT</p>
                    <div>
                        ${this.traits.map((trait) => html`
                            <p class="secondaryTitle"></p>
                            <div class="traitRow">
                                <p class="desc">${trait.traitDesc}</p>
                                <img src="../icons/trash.png" class="img">
                            </div>
                        `)}
                    </div>
                    <button type="button" @click="${this.handleShowAddPerk}" class="addBtn">+</button>
                </section>
            </section>
            ${this.showAddTrait ? html`
            <div class="traitFormWrapper">
                <div class="formTitle">
                <div>LISÄÄ PIIRRE</div>
                <button class="closeBtn" @click="${this.closeAddTrait}">X</button>
                </div>
                <div>PIIRTEEN NIMI</div>
                <div class="nimi"><textarea class="textbox" id="traitName"></textarea></div>
                <div>PIIRTEEN KUVAUS</div>
                <div class="traitDesc"><textarea class="textbox" id="traitDesc"></textarea></div>
                <button type="button" class="formAddBtn" @click="${this.addTrait}">LISÄÄ</button>
            </div>
            ` : ''}
            ${this.showAddPerk ? html`
            <div class="traitFormWrapper">
                <div class="formTitle">
                <div>LISÄÄ VALTTI</div>
                <button class="closeBtn" @click="${this.closeAddPerk}">X</button>
                </div>
                <div>VALTIN NIMI</div>
                <div class="nimi"><textarea class="textbox" id="specialityName"></textarea></div>
                <div>VALTIN KUVAUS</div>
                <div class="traitDesc"><textarea class="textbox" id="specialityDesc"></textarea></div>
                <button type="button" class="formAddBtn" @click="${this.addSpeciality}">LISÄÄ</button>
            </div>
            ` : ''}
        `;
    }
}
customElements.define('character-class', CharacterClass);