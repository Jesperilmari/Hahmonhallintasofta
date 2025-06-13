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
  `;
  static properties = {
  };

  render() {
    return html`
      <div class="wrapper">
        <span class="title">${this.title}</span>
        <div class="proficiencies">Pistomiekka, Miekka, Tikari, Jousi, Lyhytjousi, Sauva, Varkaan työkalut, Soittimet, Noppasetti, Navigoijantyökalut, Sota-aseet</div>
      </div>
    `;
  }
}
customElements.define('proficiencies-element', Proficiencies);