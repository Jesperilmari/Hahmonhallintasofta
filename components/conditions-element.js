import { LitElement, html, css } from 'lit-element';

class ConditionsElement extends LitElement {

    static styles = css`
    .wrapper{
        border: 3px solid lightblue;
        background-color: white;
        font-family: "Roboto Condensed", sans-serif;
        height: 110px;
        padding: 0;
        margin-bottom: 10px;
        width: 300px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        position:relative
    }
    .title{
        font-weight: bold;
        margin-bottom: 10px;
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
      border-bottom: solid 1px lightgray;
      box-sizing: border-box;
    }
  `;

    render() {
        return html`
    <div class="wrapper">
        <div class="acBorder">
            <div class="row">
                <div class="olotilat">
                    <div>
                        Olotilat
                    </div>
                    <textarea class="textbox">

                    </textarea>
                </div>
            </div>
        </div>
    </div>
    `;
    }
}
customElements.define('conditions-element', ConditionsElement);