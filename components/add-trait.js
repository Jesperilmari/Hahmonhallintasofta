import { LitElement, html, css } from 'lit';
export class AddTrait extends LitElement {
    static styles = css`
        .wrapper{
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
        .formTitle{
            font-weight: bold;
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: space-between;
        }
        .addBtn{
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
    `
    firstUpdated() {
        const textarea = this.renderRoot.querySelector('textarea');
        textarea.addEventListener('input', () => {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        });
    }

    handleClose(){

    }

    render() {
        return html`
            <div class="wrapper">
                    <div class="formTitle">
                        <div>LISÄÄ PIIRRE</div>
                        <button class="closeBtn" @click="${this.handleClose}">X</button>
                    </div>
                    <div class="title">PIIRTEEN NIMI</div>
                    <div class="nimi"><textarea class="textbox"></textarea></div>
                    <div class="title">PIIRTEEN KUVAUS</div>
                    <div class="desc"><textarea class="textbox"></textarea></div>
                    <button type="button" class="addBtn">LISÄÄ</button>
                </div>
            </div>
        `;
    }
}
customElements.define('add-trait', AddTrait);