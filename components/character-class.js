import { LitElement, html, css } from 'lit';
export class CharacterClass extends LitElement {
    static styles = css`
    `
    render(){
        return html`
            character class
        `;
    }
}
customElements.define('character-class', CharacterClass);