import { LitElement, html, css } from 'lit-element';

class SavingThrows extends LitElement {

  static styles = css`
  .saveWrapper{
    position: relative;
    border: 1px solid lightblue;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 110px;
    height: 30px;
    margin-top: 10px;
    margin-left: 20px;
    margin-bottom: 0px;
    border-radius: 25px;
    padding: 0px;
  }
  .toggleproficiency{
    width: 12px;
    height: 12px;
    border: 1px dotted black;
    border-radius: 15px;
    margin-left: 15px;
    margin-right: 15px;
    background-color: white;
    padding:0px;
  }
  .modifier{
    position: absolute;
    right: -17.5px;
    background-color:white;
    top: 50%;
    transform: translateY(-50%);
    border: 1px solid lightblue;
    width:35px;
    height:35px;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    padding:0px;
    margin-left:10px;
  }
  .ominaisuusTitle{
    margin:0px;
    padding:0px;
  }
  .firstRow {
  display: flex;
  flex-direction: row;
  }
  .secondRow{
    margin-top: 10px;
    margin-left: 90px;
    font-weight:bold;
  }
  `;
  static properties = {
  };

  render() {
    return html`   
    <div class="border">
      <div class="firstRow">
        <div class="firstColumn">
          <div class="saveWrapper">
            <span class="toggleproficiency"></span>  
            <p class="ominausuusTitle">${this.title}</p>
            <span class="modifier">0</span>
          </div>
        </div>
    </div>
  </div>
    `;
  }
}
customElements.define('savingthrows-element', SavingThrows);