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
        font-size: 40px;
        margin: 0;
        padding: 0;
        border-bottom: 1px solid darkgray;
        margin-left:1px;
        margin-right:5px; 
        width: 290px;
        height: 60px;
    }
    .currentHealth{
        margin: 0;
        padding: 0;
        margin-left: 0px;
        position: absolute;
    }
    .healthBtn{
        margin-left: 60px;
        position: absolute;
    }
    .slash{
        margin: 0;
        padding: 0;
        color: #696969;
        position: absolute;
        margin-left: 92px;
    }
    .maxHealth{
        margin: 0;
        padding: 0;
        margin-left: 100px;
        position: absolute;
    }
    .maxBtn{
        margin-left: 160px;
        position: absolute; 
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
    }
    .max{
        margin: 0;
        padding: 0;
    }
    .temp{
        margin: 0;
        padding: 0;
    }
    .tempNum{
        margin: 0;
        margin-left: 205px;
        padding: 0;
        position: absolute;
    }
    .tempBtn{
        position: absolute;
        margin-left: 265px;
    }
    .button{
        width: 30px;
        border:none;
        margin: 1px;
    }
    .buttonWrapper{
        display:flex;
        flex-direction: column;
    }
  `;
    static get properties() {
        return{
            currentHealth: {type: Number},
            maxHealth: {type: Number},
            tempHealth: {type: Number},
        }
    };

    constructor(){
        super();
        this.currentHealth = JSON.parse(localStorage.getItem('currentHealth') || '10');
        this.maxHealth = JSON.parse(localStorage.getItem('maxHealth') || '10');
        this.tempHealth = JSON.parse(localStorage.getItem('tempHealth') || '0');
    }

    incrementHP(){
        this.currentHealth++;
        localStorage.setItem('currentHealth', JSON.stringify(this.currentHealth));
    }

    decrementHP(){
        this.currentHealth--;
        localStorage.setItem('currentHealth', JSON.stringify(this.currentHealth));
    }

    incrementMax(){
        this.maxHealth++;
        localStorage.setItem('maxHealth', JSON.stringify(this.maxHealth));
    }
    decrementMax(){
        this.maxHealth--;
        localStorage.setItem('maxHealth', JSON.stringify(this.maxHealth));
    }
    incrementTemp(){
        this.tempHealth++;
        localStorage.setItem('tempHealth', JSON.stringify(this.tempHealth));
    }
    decrementTemp(){
        this.tempHealth--;
        localStorage.setItem('tempHealth', JSON.stringify(this.tempHealth));
    }

    render() {
        return html`
    <div class="border">
        <span class="title">
            <p class="nyk">NYKYINEN</p>
            <p class="max">MAKSIMI</p>
            <p class="temp">VÄLIAIKAINEN</p>
        </span>
        <span class="healthCounter">
            <p class="currentHealth">${this.currentHealth}</p>
            <div class="buttonWrapper healthBtn">
                <button class="button" @click="${() => this.incrementHP()}">+</button>
                <button class="button" @click="${() => this.decrementHP()}">-</button> 
            </div>
            <p class="maxHealth">${this.maxHealth}</p>
            <div class="buttonWrapper maxBtn">
                <button class="button" @click="${() => this.incrementMax()}">+</button>
                <button class="button" @click="${() => this.decrementMax()}">-</button> 
            </div>
            <p class="tempNum">${this.tempHealth}</p>
            <div class="buttonWrapper tempBtn">
                <button class="button" @click="${() => this.incrementTemp()}">+</button>
                <button class="button" @click="${() => this.decrementTemp()}">-</button> 
            </div>
        </span>
        <span class="hitpoints">
            OSUMAPISTEET
        </span>
    </div>
    `;
    }
}
customElements.define('health-element', Health);