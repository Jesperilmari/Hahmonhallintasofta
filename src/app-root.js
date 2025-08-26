import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';

import './views/characterSheet-view.js';
import './views/spells-view.js';
import './views/weapons-view.js';
import './components/nav-element.js';

export class AppRoot extends LitElement {

    firstUpdated() {
    const outlet = this.shadowRoot.getElementById('outlet');
    const router = new Router(outlet, { useHash: true });
    const baseUrl = window.location.hostname === 'localhost'
    // local dev
    ? '/'
    // GitHub Pages
    : '/Hahmonhallintasofta/';
router.baseUrl = baseUrl;
    router.setRoutes([
      { path: '/', component: 'character-sheet' },
      { path: '/spells', component: 'spells-view' },
      { path: '/weapons', component: 'weapons-view'}
    ]);
  }
    render() {
        return html`
            <nav-element></nav-element>
            <div id="outlet"></div>
        `;
    }
} customElements.define('app-root', AppRoot);
