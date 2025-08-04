import { LitElement, html, css } from 'lit-element';

class Proficiencies extends LitElement {
  static styles = css`
    .wrapper {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
    }
    .title {
      font-weight: bold;
      color: #696969;
    }
    .proficiencies {
      border-bottom: 1px solid gray;
      margin-top: 5px;
      margin-bottom: 5px;
    }
    .textbox {
      font-family: "Roboto Condensed", sans-serif;
      border: none;
      width: 100%;
      min-height: 1px;
      height: auto;
      resize: none;
      overflow: hidden;
      line-height: 25px;
      box-sizing: border-box;
    }
  `;

  static get properties() {
    return {
      title: { type: String },
      proficiencies: { type: Object },
    };
  }

  constructor() {
    super();
    const defaults = {
    ASEPÄTEVYYDET: '',
    HAARNISKAPÄTEVYYDET: '',
    KIELET: '',
    TYÖKALUPÄTEVYYDET: ''
  };
    const saved = JSON.parse(localStorage.getItem('proficiencies') || '{}');
    this.proficiencies = { ...defaults, ...saved };
  }

  autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  save(title, value) {
    this.proficiencies = {
      ...this.proficiencies,
      [title]: value,
    };
    localStorage.setItem('proficiencies', JSON.stringify(this.proficiencies));
    this.resizeAllTextareas()
  }

  handleInput(e) {
    this.autoResize(e.target);
  }

  firstUpdated() {
    this.resizeAllTextareas();
  }

  resizeAllTextareas() {
        const textareas = this.renderRoot.querySelectorAll('textarea');
        for (const textarea of textareas) {
            this.resizeTextarea(textarea);
        }
    }

    resizeTextarea(textarea) {
        textarea.style.height = 'auto';
        const lineHeight = parseInt(window.getComputedStyle(textarea).lineHeight);
        textarea.style.height = lineHeight + 'px';
        if (textarea.scrollHeight > lineHeight) {
            textarea.style.height = textarea.scrollHeight + 'px';
        }
    }

  render() {
    return html`
      ${Object.entries(this.proficiencies).map(
        ([title, value]) => html`
          <div class="wrapper">
            <span class="title">${title}</span>
            <div class="proficiencies">
              <textarea
                class="textbox"
                spellcheck="false"
                .value=${value}
                @input=${e => {
                  this.autoResize(e.target);
                  this.save(title, e.target.value);
                }}
              ></textarea>
            </div>
          </div>
        `
      )}
    `;
  }
}
customElements.define('proficiencies-element', Proficiencies);