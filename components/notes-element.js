import { LitElement, html, css } from 'lit';
export class Notes extends LitElement {
    static styles = css`
    .notesBox{
        height: 100%;
        margin: 10px;
        border: solid 1px lightgray;
    }
    .title{
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 5px;
        font-weight: bold;
    }
    `
    render(){
        return html`
        <span class="title">MUISTIINPANOT</span>
            <div contenteditable="true" class="notesBox"></div>
        `;
    }
}
customElements.define('notes-element', Notes);