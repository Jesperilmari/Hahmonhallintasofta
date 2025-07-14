import { LitElement, html, css } from 'lit-element';

class Proficiencies extends LitElement {

  static styles = css`
  .wrapper{
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }
  .title{
    font-weight: bold;
    color: #696969;
  }
  .proficiencies{
    border-bottom: 1px solid gray;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .textbox{
    font-family: "Roboto Condensed", sans-serif;
    border: none;
    width: 100%;
    min-height: 1px;
    max-height: 150px;
    height: auto;
    resize: none;
  }
  `;
  static properties = {
  };

  firstUpdated() {
  const textarea = this.renderRoot.querySelector('textarea');
  textarea.addEventListener('input', () => {
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  });
}
  
  render() {
    return html`
      <div class="wrapper">
        <span class="title">${this.title}</span>
        <div class="proficiencies"><textarea class="textbox"></textarea></div>
      </div>
    `;
  }
}
customElements.define('proficiencies-element', Proficiencies);