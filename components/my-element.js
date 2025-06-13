import { LitElement, html, css } from 'lit-element';

class MyElement extends LitElement {
  render() {
    return html`
      <div>Hello from MyElement!</div>
    `;
  }
}
customElements.define('my-element', MyElement);