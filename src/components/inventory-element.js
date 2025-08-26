import { LitElement, html, css } from 'lit';
export class Inventory extends LitElement {
    static styles = css`
    .wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
    }
    .right{
        display: flex;
        flex-direction: row;
        margin-left: auto;
        align-items: center;
        box-sizing: border-box;
    }
    .name{
        padding-left: 5px;
        box-sizing: border-box;
    }
    .value{
        padding-right: 5px;
        width: 40px;
        text-align: right;
        box-sizing: border-box;
    }
    .weight{
        padding-right: 5px;
        width: 40px;
        text-align: right;
        box-sizing: border-box;
    }
    .weaponRow {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 5px 10px;
        height: auto;
        gap: 10px;
        background-color: lightgray;
        width: 100%;
        box-sizing: border-box;
    }
    .weaponRow.even {
        background-color: lightgray;
    }

    .weaponRow.odd {
        background-color: white;
    }
    .buttonWrapper{
        display:flex;
        flex-direction: column;
        box-sizing: border-box;
    }
    .hbButton{
        width: 30px;
        margin: 1px;
        margin-left: 10px;
        margin-right: 5px;
        border:none;
        box-sizing: border-box;
    }
    .hbWrapper{
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: left;
        box-sizing: border-box;
    }
    .hb{
        display: flex;
        align-items: center;
        justify-content: center;
        border: solid 1px gray;
        border-radius: 5px;
        width: 40px;
        height: 30px;
        margin-left: 10px;
        box-sizing: border-box;
    }
    .options{
        display: flex;
        flex-direction: row;
        margin-left: auto;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
    }
    .img{
        height: 20px;
        width: 20px;
        display: flex;
        padding-left: 5px;
        padding-right: 5px;
    }
    .addBtn{
        border: none;
        border-radius: 20px;
        padding: 0;
        margin: 0;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25px;
        height: 25px;
        vertical-align: middle;
        padding-bottom: 4px;
        padding-left: 1px;
        margin: 5px;
        margin-left: 10px;
        box-sizing: border-box;
    }
    .addItemWrapper{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        padding-left: 5px;
        box-sizing: border-box;
    }
    .title{
        margin-left: 10px;
    }
    .itemFormWrapper{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: white;
        color: black;
        padding: 0.5rem;
        text-align: left;
        z-index: 9999;
        border-top: solid lightblue 2px;
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: left;
        box-sizing: border-box
    }
    .formTitle{
        font-weight: bold;
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
    }
    .closeBtn{
        border: none;
        border-radius: 20px;
        padding: 0;
        margin: 0;
        font-size: 15px;
        font-weight:bold;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25px;
        height: 25px;
        vertical-align: middle;
        padding-bottom: 2px;
        padding-left: 1px;
        display: flex;
        justify-self: end;
    }
    .nimi{
        max-width: 500px;
        min-width: 100px;
    }
    .textbox{
        font-family: "Roboto Condensed", sans-serif;
        width: 98%;
        height: auto;
        resize: none;
        margin-right: 10px;
    }
    .formAddBtn{
        font-family: "Roboto Condensed", sans-serif;
        font-size: 15px;
        font-weight: bold;
        color: black;
        margin-top: 5px;
        border: none;
        border-radius: 5px;
        padding: 5px;
        width: 150px;
    }
    .itemWeight{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
    .weightBox {
        width: 100px;
        height: 30px;
        border-radius: 5px;
        border: solid 1px gray;
        text-align: center;
        padding: 0;
        line-height: 30px;     
        box-sizing: border-box;
        overflow: hidden;
    }
    .fieldBox {
        font-family: "Roboto Condensed", sans-serif;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: solid 1px gray;
        border-radius: 5px;
        width: 60px;
        height: 30px;
        margin-left: 10px;
        box-sizing: border-box;
        background: none;
        text-align: center;
    }
    .itemDescWrapper{
        width:100%;
    }
    .itemDetails{
        margin-left: auto;
        padding-left: 20px;
    }
    `
    staticProperties = {
    }

    static get properties() {
        return {
            addedWeapons: { type: Array },
            showAddItem: { type: Boolean },
            addedItems: { type: Array },
            openItemDetails: { state: true },
        }
    }

    constructor() {
        super();
        this.showAddItem = false;
        this.addedWeapons = JSON.parse(localStorage.getItem('weapons') || '[]');
        this.addedItems = JSON.parse(localStorage.getItem('addedItems') || '[]');
        this.openItemDetails = new Set();
    }
    incrementCount(index) {
        const updated = [...this.addedWeapons];
        updated[index].count = (updated[index].count ?? 0) + 1;
        this.addedWeapons = updated;
        localStorage.setItem('weapons', JSON.stringify(this.addedWeapons))
    }

    decrementCount(index) {
        const updated = [...this.addedWeapons];
        updated[index].count = (updated[index].count ?? 1) - 1;
        this.addedWeapons = updated;
        localStorage.setItem('weapons', JSON.stringify(this.addedWeapons))
    }

    handleShowAddItem() {
        this.showAddItem = true;
    }
    closeAddItem() {
        this.showAddItem = false;
    }
    addItem() {
        const name = this.shadowRoot.getElementById("itemName").value.trim();
        const desc = this.shadowRoot.getElementById("itemDesc").value.trim();
        const weight = this.shadowRoot.getElementById("itemWeight").value.trim();
        const value = this.shadowRoot.getElementById("itemValue").value.trim();

        if (!name) return;

        const newItem = {
            Nimi: name,
            Kuvaus: desc,
            Paino: weight,
            Hinta: value,
            count: 1
        };

        const updatedItems = [...(this.addedItems || []), newItem];
        this.addedItems = updatedItems;

        localStorage.setItem("addedItems", JSON.stringify(this.addedItems));
        this.showAddItem = false;
    }

    updateWeaponField(index, field, value) {
        const updated = [...this.addedWeapons];
        updated[index][field] = value;
        this.addedWeapons = updated;
        localStorage.setItem('weapons', JSON.stringify(this.addedWeapons));
    }

    deleteWeapon(name) {
        console.log(name)
        const array = [...this.addedWeapons];
        const updated = array.filter(weapon => weapon.Nimi !== name)
        this.addedWeapons = updated;
        localStorage.setItem('weapons', JSON.stringify(this.addedWeapons));
    }
    updateItemField(index, field, value) {
        const updated = [...this.addedItems];
        updated[index][field] = value;
        this.addedItems = updated;
        localStorage.setItem('addedItems', JSON.stringify(this.addedItems));
    }

    incrementItemCount(index) {
        const updated = [...this.addedItems];
        updated[index].count = (updated[index].count ?? 0) + 1;
        this.addedItems = updated;
        localStorage.setItem('addedItems', JSON.stringify(this.addedItems));
    }

    decrementItemCount(index) {
        const updated = [...this.addedItems];
        updated[index].count = (updated[index].count ?? 1) - 1;
        this.addedItems = updated;
        localStorage.setItem('addedItems', JSON.stringify(this.addedItems));
    }

    deleteItem(index) {
        const updated = [...this.addedItems];
        updated.splice(index, 1);
        this.addedItems = updated;
        localStorage.setItem('addedItems', JSON.stringify(this.addedItems));
    }

    toggleItemDetail(itemName) {
        const updated = new Set(this.openItemDetails);
        if (updated.has(itemName)) {
        updated.delete(itemName);
        } else {
        updated.add(itemName);
        }
        this.openItemDetails = updated;
    }

    render() {
        const weaponCount = this.addedWeapons.length;
        const startIndex = weaponCount % 2 === 0 ? 0 : 1;
        return html`
            <div class="wrapper">
                <p>VARUSTELUETTELO</p>
                ${this.addedWeapons.map((weapon, i) => html`
                    <div class="weaponRow ${i % 2 === 0 ? 'even' : 'odd'}">
                    <p class="name">${weapon.Nimi}</p>
                    <span class="right">
                        <input 
                        class="fieldBox"
                        type="text"
                        .value=${weapon.Hinta ?? ''}
                        @input=${(e) => this.updateWeaponField(i, 'Hinta', e.target.value)}
                        >
                        <input 
                        class="fieldBox"
                        type="text"
                        .value=${weapon.Paino ?? ''}
                        @input=${(e) => this.updateWeaponField(i, 'Paino', e.target.value)}
                        >

                        <span class="hbWrapper">
                        <span class="hb">${weapon.count ?? 1}</span>
                        <span class="buttonWrapper">
                            <button class="hbButton" @click="${() => this.incrementCount(i)}">+</button>
                            <button class="hbButton" @click="${() => this.decrementCount(i)}">-</button>
                        </span>
                        </span>

                        <div class="options">
                        <img src="icons/trash.png" class="img" title="Delete" @click="${() => this.deleteWeapon(weapon.Nimi)}">
                        </div>
                    </span>
                    </div>
                `)}
                ${this.addedItems.map((item, i) => html`
                    <div class="weaponRow ${(i + startIndex) % 2 === 0 ? 'even' : 'odd'}">
                        <img src="icons/down-arrow.png" class="img" title="Details" @click="${() => this.toggleItemDetail(item.Nimi)}">
                        <p class="name">${item.Nimi}</p>
                        <span class="right">
                        <input 
                            class="fieldBox"
                            type="text"
                            .value=${item.Hinta ?? ''}
                            @input=${(e) => this.updateItemField(i, 'Hinta', e.target.value)}
                        >
                        <input 
                            class="fieldBox"
                            type="text"
                            .value=${item.Paino ?? ''}
                            @input=${(e) => this.updateItemField(i, 'Paino', e.target.value)}
                        >

                        <span class="hbWrapper">
                            <span class="hb">${item.count ?? 1}</span>
                            <span class="buttonWrapper">
                            <button class="hbButton" @click="${() => this.incrementItemCount(i)}">+</button>
                            <button class="hbButton" @click="${() => this.decrementItemCount(i)}">-</button>
                            </span>
                        </span>

                        <div class="options">
                            <img src="icons/trash.png" class="img" title="Delete" @click="${() => this.deleteItem(i)}">
                        </div>
                        </span>
                    </div>
                    ${this.openItemDetails.has(item.Nimi)
                            ? html`
                            <div class="itemDescWrapper">
                                <p class="itemDetails">${item.Kuvaus}</p>
                            </div>
                            `: ''}
                    `)}

                    <div class="addItemWrapper">
                        <p class="title">LISÄÄ ESINE</p>
                        <button type="button" @click="${this.handleShowAddItem}" class="addBtn">+</button>
                    </div>
                    </div>
                        ${this.showAddItem ? html`
                            <div class="itemFormWrapper">
                                <div class="formTitle">
                                <div>LISÄÄ ESINE</div>
                                <button class="closeBtn" @click="${this.closeAddItem}">X</button>
                                </div>
                                <div>ESINEEN NIMI</div>
                                <span>
                                    <div class="nimi"><textarea class="textbox" id="itemName"></textarea></div>
                                </span>
                                <div>ESINEEN KUVAUS</div>
                                <div class="itemDesc"><textarea class="textbox" id="itemDesc"></textarea></div>
                                <div>ESINEEN PAINO</div>
                                <div class="itemWeight"><textarea class="textbox weightBox" id="itemWeight"></textarea></div>
                                <div>ESINEEN ARVO</div>
                                <div class="itemValue"><textarea class="textbox weightBox" id="itemValue"></textarea></div>
                                <button type="button" class="formAddBtn" @click="${this.addItem}">LISÄÄ</button>
                            </div>
            ` : ''}
        `;
    }
}
customElements.define('inventory-element', Inventory);