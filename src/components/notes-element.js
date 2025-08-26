import { LitElement, html, css } from 'lit';

export class Notes extends LitElement {
  static styles = css`
    .notesBox {
      height: 100%;
      margin: 10px;
      border: solid 1px lightgray;
      padding: 5px;
      outline: none;
      min-height: 100px;
    }
    .title {
      margin-left: 10px;
      margin-right: 10px;
      margin-bottom: 5px;
      font-weight: bold;
      display: block;
    }
  `;

  constructor() {
    super();
    this._key = 'notesContent';
  }

  firstUpdated() {
    const saved = localStorage.getItem(this._key);
    if (saved !== null) {
      this.shadowRoot.querySelector('.notesBox').innerHTML = saved;
    }
    const box = this.shadowRoot.querySelector('.notesBox');
    box.addEventListener('blur', () => {
      localStorage.setItem(this._key, box.innerHTML);
    });
  }

  render() {
    return html`
      <span class="title">MUISTIINPANOT</span>
      <div contenteditable="true" class="notesBox"></div>
    `;
  }
}

customElements.define('notes-element', Notes);