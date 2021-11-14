import "./NesButton.js";
import "./NesConnector.js";

class NesConsoleFront extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      .container {
        width: var(--width);
        height: var(--height);
      }

      .top-container {
        height: 50%;
        background: #C4C0BD;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        display: flex;
        justify-content: center;
        position: relative;
        box-shadow: inset 0 2px 1px #fff9;
      }

      .bottom-container {
        height: 50%;
        background: #686264;
        clip-path: polygon(0 0, 100% 0, 100% 20%, 94% 100%, 6% 100%, 0 20%);
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        border-top: 2px solid #0007;
        box-shadow: inset 0 1px 0 #777;
      }

      .door-container {
        width: 399px;
        height: 60px;
      }

      .door::after {
        content: "";
        display: block;
        background: #ddd;
        width: 60px;
        height: 3px;
        border-radius: 2px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        box-shadow:
          0 0 2px #999 inset,
          0 0 2px 2px #9994,
          0 2px 2px 1px #1119;
        position: absolute;
        bottom: 0;
        left: 35%;
      }

      .door {
        width: 100%;
        height: 100%;
        border: 2px solid #888;
        border-top: 0;
        transform: translateX(-4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        box-shadow: 0 1px 1px #eee;
      }

      .black-part {
        background: #222;
        width: 91px;
        height: 100%;
        position: absolute;
        right: 76px;
        bottom: 0;
      }

      .brand,
      .model {
        font-family: "Pretendo";
        color: #A10C0C;
        text-shadow: 0 0 2px #A10C0C44;
        font-size: 14px;
        padding-left: 20px;
      }

      .model {
        font-size: 11px;
      }

      .bottom-container .black-part {
        display: flex;
      }

      .power-button-container {
        border: 1px solid #555;
        border-left: 0;
        border-top: 0;
        border-right-color: #888;
        width: 175px;
        height: 40px;
        transform: translateX(60px);
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 25px 15px;
        box-sizing: border-box;
      }

      .led {
        width: 10px;
        height: 10px;
        background: #3E3E3E;
        margin-right: 10px;
      }

      .led.on {
        animation: blink 1.5s linear infinite alternate;
      }

      @keyframes blink {
        0%, 70% { background: red }
        71%, 100% { background: #111 }
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${NesConsoleFront.styles}</style>
    <div class="container">
      <div class="top-container">
        <div class="door-container">
          <div class="door">
            <div class="brand">NaNtendo</div>
            <div class="model">Entertainment System™</div>
          </div>
          <div class="black-part"></div>
        </div>
      </div>
      <div class="bottom-container">
        <div class="power-button-container">
          <div class="led on"></div>
          <nes-button label="Power"></nes-button>
          <nes-button label="Reset"></nes-button>
        </div>
        <div class="black-part">
          <nes-connector label="1"></nes-connector>
          <nes-connector label="2"></nes-connector>
        </div>
      </div>
    </div>`;
  }
}

customElements.define("nes-console-front", NesConsoleFront);
