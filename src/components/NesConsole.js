import "./NesConsoleTop.js";
import "./NesConsoleFront.js";

class NesConsole extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        /* Frontal view */
        --width: 550px;
        --height: 175px;
        --depth: 375px;
        --text-color: #D23B40;
      }

      .container {
        perspective: 800px;
        transform-style: preserve-3d;
      }

      nes-console-top {
        display: block;
        transform-origin: 50% 100%;
        transform: rotateX(75deg);
      }

      nes-console-front {
        display: block;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${NesConsole.styles}</style>
    <div class="container">
      <nes-console-top></nes-console-top>
      <nes-console-front></nes-console-front>
    </div>`;
  }
}

customElements.define("nes-console", NesConsole);
