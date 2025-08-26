import { LitElement, html } from 'lit';
import { Router } from '@vaadin/router';
import './views/characterSheet-view.js';
import './views/spells-view.js';
import './views/weapons-view.js';
import './components/nav-element.js';
import './css/main.css';

export class AppRoot extends LitElement {
  createRenderRoot() { return this; }
  render() {
    return html`
      <nav-element></nav-element>
      <div id="outlet"></div>
    `;
  }

  firstUpdated() {
    const outlet = this.querySelector('#outlet');
    const router = new Router(outlet);

    router.useHash = true;
    router.setRoutes([
      { path: '/Hahmonhallintasofta/', component: 'character-sheet' },
      { path: '/Hahmonhallintasofta/spells', component: 'spells-view' },
      { path: '/Hahmonhallintasofta/weapons', component: 'weapons-view' },
    ]);
  }
}

customElements.define('app-root', AppRoot);