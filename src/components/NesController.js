import "./CircleButton.js";
import "./DireccionalPad.js";

class NesController extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --width: 375px;
        --height: 175px;
      }

      .top {
        perspective: 1000px;
        transform-style: preserve-3d;
        position: absolute;
        top: -48px;
      }

      .top-controller {
        background: #888;
        background: linear-gradient(to top, #888, #555);
        width: var(--width);
        height: 50px;
        border-radius: 5px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        transform-origin: 50% 100%;
        transform: rotateX(80deg);
      }

      .outer-container {
        background: #CECECE;
        width: var(--width);
        height: var(--height);
        border-radius: 5px;

        display: flex;
        justify-content: center;
        align-items: center;

        animation: float 1.5s ease-in-out infinite alternate;
      }

      .inner-container {
        --inner-bgcolor: #3A3A3A;

        width: calc(var(--width) * 0.92);
        height: calc(var(--height) * 0.75);
        background: #3A3A3A;
        border-radius: 5px;
        transform: translateY(7%);

        display: grid;
        grid-template-columns: 32% 32% 36%;
      }

      .inner-container > div {
        background: var(--inner-bgcolor);
      }

      .options-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .options-container > .decoration {
        height: 15%;
        border-radius: 5px;
      }

      .decoration {
        background: #A3A3A3;
      }

      .decoration:first-child {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }

      .decoration:last-child {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        height: 8%;
      }

      .options-buttons {
        height: 26%;
        background: #B2B2B2;
        border: 4px solid #D0D0D0;
        box-shadow: inset 3px 3px 0 #888;

        display: flex;
        justify-content: space-around;
        align-items: center;
      }

      .options-buttons .button {
        background: #3A3A3A;
        border-radius: 4px;
        width: 26%;
        height: 38%;
        box-shadow: inset 2px 2px 1px #0003;
      }

      .label-container {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }

      .brand-container {
        display: flex;
        justify-content: center;
        width: 100%;
      }

      .label,
      .brand {
        font-family: "Pretendo";
        font-size: 10px;
        color: #D23B40;
        text-align: center;
      }

      .brand {
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translate(-10%, 0);
      }

      .buttons-container {
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 50% 50%;
        flex-direction: column;
        justify-items: center;
      }

      .circle-buttons-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        width: 70%;
        transform: translate(-5%, 15%);
      }

      .pad-container {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .shadow-container {
        perspective: 250px;
        transform-style: preserve-3d;
      }

      .shadow {
        width: 100%;
        height: 30px;
        background: #0004;
        animation: move-shadow 1.5s ease-in-out infinite alternate;
        border-radius: 4px;
      }

      @keyframes float {
        0% {
          transform: translateY(-25px);
        }

        100% {
          transform: translateY(25px);
        }
      }

      @keyframes move-shadow {
        0% {
          transform: translateY(50px) rotateX(50deg) scale(0.8);
          filter: blur(2px);
          opacity: 0.75;
        }

        100% {
          transform: translateY(50px) rotateX(50deg) scale(1.05);
          filter: blur(0);
          opacity: 1;
        }
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${NesController.styles}</style>
    <div class="outer-container">
      <div class="top">
        <div class="top-controller"></div>
      </div>
      <div class="inner-container">
        <div class="pad-container">
          <direccional-pad></direccional-pad>
        </div>
        <div class="options-container">
          <div class="decoration"></div>
          <div class="decoration"></div>
          <div class="decoration label-container">
            <div class="label">SELECT</div>
            <div class="label">START</div>
          </div>
          <div class="options-buttons">
            <div class="select button"></div>
            <div class="start button"></div>
          </div>
          <div class="decoration"></div>
        </div>
        <div class="buttons-container">
          <div class="brand-container">
            <div class="brand">NaNtendo</div>
          </div>
          <div class="circle-buttons-container">
            <circle-button label="B"></circle-button>
            <circle-button label="A"></circle-button>
          </div>
        </div>
      </div>
    </div>
    <div class="shadow-container">
      <div class="shadow"></div>
    </div>`;
  }
}

customElements.define("nes-controller", NesController);
