import { LitElement, html, css } from 'lit-element';

class Weapons extends LitElement {
    static styles = css`
    .titlesWrapper{
        display: flex;
        flex-direction: row;
        margin-bottom: 0px;
    }
    .titles{
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 5px;
    }
    .damageWrapper{
        border: solid grey 1px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 5px;
        margin-left: 120px;
        border-radius: 5px;
        position: absolute;
        width: 90px;
    }
    .weaponRow{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-left: 10px;
        background-color: lightgray;
        height: 46px;
        padding-top: 0;
        margin-top: 0;
    }
    .vahinko{
        padding-left: 75px;
    }
    .hbTitle{
        padding-left: 40px;
    }
    .dmgType{
        font-size: 12px;
        color: #696969;
    }
    .hb{
        font-weight:bold;
        margin-left:240px;
        font-size: 20px;
        position: absolute;
    }
    .properties{
        margin-left: 280px;
        position: absolute;
    }
    .name{
        display: flex;
        flex-wrap: wrap;
        width: 120px;
        margin-left: 0px;
    }
    `;
    render() {
        return html`
            <div class="titlesWrapper">
                <p class="titles">ASE</p>
                <p class="titles vahinko">VAHINKO</p>
                <p class="titles hbTitle">HB</p>
                <p class="titles">OMINAISUUDET</p>
            </div>
            <div class="weaponRow">
                <span class="name">
                Aseeton hyökkäys
                </span>
                <span class="damageWrapper">  
                    <span>1</span>
                    <span class="dmgType">-</span>
                </span>
                <span class="hb">+0</span>
                <span class="properties">Hahmolla on automaattisesti pätevyys aseettomiin hyökkäyksiin</span>  
            </div>
        `;
    }
}
customElements.define('weapons-element', Weapons);