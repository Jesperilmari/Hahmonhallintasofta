import { LitElement, html, css } from 'lit-element';

class Health extends LitElement {

    static styles = css`
    .border{
        border: 3px solid lightblue;
        border-radius: 10px;
        background-color: white;
        font-family: "Roboto Condensed", sans-serif;
        height: 110px;
        padding: 0;
        width: 300px;
    }
    .title{
        display: flex;
        flex-direction: row;
        font-weight: bold;
        justify-content: space-between;
        color: #696969;
        margin: 0;
        padding: 0;
    }
    .healthCounter{
        display: flex;
        flex-direction: row;
        align-items: center;
        font-weight: bold;
        font-size: 50px;
        margin: 0;
        padding: 0;
        border-bottom: 1px solid darkgray;
        margin-left:5px;
        margin-right:5px; 
        width: 290px;
    }
    .currentHealth{
        margin: 0;
        padding: 0;
        margin-left: 10px
    }
    .slash{
        margin: 0;
        padding: 0;
        color: #696969;
        margin-left: 20px
    }
    .maxHealth{
        margin: 0;
        padding: 0;
        margin-left: 10px
    }
    .hitpoints{
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 5px;
        font-weight: bold;
    }
    .nyk{
        margin: 0;
        padding: 0;
        margin-left: 5px;
        margin-right: 5px;
    }
    .max{
        margin: 0;
        padding: 0;
        margin-left: 5px;
        margin-right: 5px;
    }
    .temp{
        margin: 0;
        padding: 0;
        margin-left: 5px;
        margin-right: 5px;
    }
    .tempNum{
        margin: 0;
        padding: 0;
        margin-left: 80px;
    }
  `;
    static properties = {
        currentHealthHover: {type: Boolean},
        maxHealthHover: {type: Boolean},
        tempHealthHover: {type: Boolean}
    };

    render() {
        return html`
    <div class="border">
        <span class="title">
            <p class="nyk">NYKYINEN</p>
            <p class="max">MAKSIMI</p>
            <p class="temp">VÄLIAIKAINEN</p>
        </span>
        <span class="healthCounter">
            <p class="currentHealth">10</p>
            <p class="slash">/</p>
            <p class="maxHealth">10</p>
            <p class="tempNum">0</p>
        </span>
        <span class="hitpoints">
            OSUMAPISTEET
        </span>
    </div>
    `;
    }
}
customElements.define('health-element', Health);