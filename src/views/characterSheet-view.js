import { LitElement, html, css } from 'lit-element';
import '../../components/character-attribute.js';
import '../../components/skill-element.js';
import '../../components/health-element.js';
import '../../components/heropoint-element.js';
import '../../components/saving-throws.js';
import '../../components/proficiencies-element.js';
import '../../components/senses-element.js';
import '../../components/proficiency-bonus.js';
import '../../components/speed-element.js';
import '../../components/ac-element.js';

class CharacterSheet extends LitElement {
    static styles = css`
.bioBar {
    width: 100%;
    height: 50px;
    background-color: rgb(63, 63, 63);
    padding: 0;
    margin: 0;
}

.attributes {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.skills {
    border: 3px solid #add8e6;
    width: 300px;
    background-color: white;
    font-family: "Roboto Condensed", sans-serif;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    height: 750px;
}

.firstRow {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.skilltitles {
    display: flex;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 14px;
    padding: 0;
    margin: 0;
    height: 38px;
    font-weight: bold;
}

.pate {
    margin-left: 7px;
    margin-right: 6px;
}

.omi {
    margin-right: 25px;
}

.taito {
    margin-right: 107px;
}

.character-name {
    margin: 0;
}

.characterClassLvl {
    margin: 0;
}
.secondRow{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.proficienciesWrapper {
    border: 3px solid #add8e6;
    width: 280px;
    height: 400px;
    background-color: white;
    display: flex;
    font-family: "Roboto Condensed", sans-serif;
    flex-direction: column;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    overflow-y: scroll;
    margin-left: 10px;
}

.saveWrapper {
    border: 3px solid lightblue;
    border-radius: 10px;
    background-color: white;
    font-family: "Roboto Condensed", sans-serif;
    height: 160px;
    padding: 0px;
    margin: 10px;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.saveRow1{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}
.saveTitle{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
}
.sensesWrapper{
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
}
  `;

    async firstUpdated() {
        await this.updateComplete;
        window.dispatchEvent(new CustomEvent('attributes-ready'));
    }

    render() {
        return html`
      <div class="firstRow">
        <character-attribute name="VOIMAKKUUS" value="15" id="VOIM"></character-attribute>
        <character-attribute name="KETTERYYS" value="6" id="KET"></character-attribute>
        <character-attribute name="SITKEYS" value="9"></character-attribute>
        <character-attribute name="ÄLYKKYYS" value="27" id="ÄLY"></character-attribute>
        <character-attribute name="VIISAUS" value="10" id="VIIS"></character-attribute>
        <character-attribute name="KARISMA" value="18" id="KAR"></character-attribute>
        <proficiency-bonus></proficiency-bonus>
        <speed-element></speed-element>
        <heropoint-element></heropoint-element>
        <health-element></health-element>
        <ac-element></ac-element>
    </div>
    <div class="secondRow">
        <div class="skills">
            <div class="skilltitles">
                <p class="pate">PÄTE</p>
                <p class="omi">OMIN</p>
                <p class="taito">TAITO</p>
                <p class="bonus">BONUS</p>
            </div>
            <skill-element name="Urheilu" attr="VOIM"></skill-element>
            <skill-element name="Akrobatia" attr="KET"></skill-element>
            <skill-element name="Hiipiminen" attr="KET"></skill-element>
            <skill-element name="Sorminäppäryys" attr="KET"></skill-element>
            <skill-element name="Historia" attr="ÄLY"></skill-element>
            <skill-element name="Luonto" attr="ÄLY"></skill-element>
            <skill-element name="Salatiede" attr="ÄLY"></skill-element>
            <skill-element name="Tutkimus" attr="ÄLY"></skill-element>
            <skill-element name="Uskonto" attr="ÄLY"></skill-element>
            <skill-element name="Eläinten käsittely" attr="VIIS"></skill-element>
            <skill-element name="Lääketiede" attr="VIIS"></skill-element>
            <skill-element name="Oivallus" attr="VIIS"></skill-element>
            <skill-element name="Selviytyminen" attr="VIIS"></skill-element>
            <skill-element name="Tarkkaavaisuus" attr="VIIS"></skill-element>
            <skill-element name="Tarkkaavaisuus" attr="VIIS"></skill-element>
            <skill-element name="Esiintyminen" attr="KAR"></skill-element>
            <skill-element name="Huijaaminen" attr="KAR"></skill-element>
            <skill-element name="Suostuttelu" attr="KAR"></skill-element>
            <skill-element name="Uhkailu" attr="KAR"></skill-element>
        </div>
        <div class="secondRowSecondClmn">
            <div class="saveWrapper">
                <div class="saveRow1">
                    <div>
                        <savingthrows-element attr="VOIM" defVal=0></savingthrows-element>
                        <savingthrows-element attr="KET" defVal=0></savingthrows-element>
                        <savingthrows-element attr="SIT" defVal=0></savingthrows-element>
                    </div>
                    <div>
                        <savingthrows-element attr="ÄLY" defVal=0></savingthrows-element>
                        <savingthrows-element attr="VIIS" defVal=0></savingthrows-element>
                        <savingthrows-element attr="KAR" defVal=0></savingthrows-element>
                    </div>
                </div>
                <span class="saveTitle">
                    PELASTUSHEITOT
                </span>
            </div>
            <div class="sensesWrapper">
                <senses-element></senses-element>
            </div>
            <div class="proficienciesWrapper">
                <proficiencies-element title="ASEPÄTEVYYDET"></proficiencies-element>
                <proficiencies-element title="HAARNISKAPÄTEVYYDET"></proficiencies-element>
                <proficiencies-element title="KIELET"></proficiencies-element>
                <proficiencies-element title="TYÖKALUPÄTEVYYDET"></proficiencies-element>
            </div>
        </div>
        <div class="secondRowThirdClmn">
        </div>
    </div>
    `;
    }
}
customElements.define('character-sheet', CharacterSheet);