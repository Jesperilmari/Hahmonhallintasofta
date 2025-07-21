import { LitElement, html, css } from 'lit';
export class Inventory extends LitElement {
    static styles = css`
    `
    render(){
        return html`
            inventory
        `;
    }
}
customElements.define('inventory-element', Inventory);