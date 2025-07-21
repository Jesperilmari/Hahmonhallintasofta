import { LitElement, html, css } from 'lit';
export class Notes extends LitElement {
    static styles = css`
    `
    render(){
        return html`
            Notes
        `;
    }
}
customElements.define('notes-element', Notes);