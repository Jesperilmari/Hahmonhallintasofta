import { LitElement, html, css } from 'lit-element';

class senses extends LitElement {

  static styles = css`
  .border{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 3px solid lightblue;
    border-radius: 10px;
    background-color: white;
    font-family: "Roboto Condensed", sans-serif;
    width: 300px;
  }
  .wrapper{
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: bold;
    position: relative;
    margin-top: 3px;
    margin-bottom: 3px;
    transform: translateX(+6%);
  }
  .title{
    width:220px;
    border: 3px solid lightblue;
    background-color: white;
    border-radius: 10px;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: bold;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    padding-right: 20px; 
  }
  .num{
    border: 3px solid #add8e6;
    background-color: white;
    border-radius: 40px;
    width: 60px;
    height: 35px;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    transform: translateX(-50%);
  }
  `;
  static properties = {
  };

  render() {
    return html`
    <div class="border"> 
      <div class="wrapper">
        <div class="title">
        PASSIIVINEN TARKKAAVAISUUS
        </div>
        <div class="num">
          12
        </div>
      </div>
      <div class="wrapper">
        <div class="title">
        ALOITE
        </div>
        <div class="num">
          +4
        </div>
      </div>
      <div class="wrapper">
        <div class="title">
        PIMEÄNÄKÖ
        </div>
        <div class="num">
          40m
        </div>
      </div>
      AISTIT
    </div>

    `;
  }
}
customElements.define('senses-element', senses);