import { LitElement, html } from 'lit';

export class SpellsView extends LitElement {
  render() {
    return html`<h2>About</h2><p>This is the about page.</p>`;
  }
}
customElements.define('spells-view', SpellsView);