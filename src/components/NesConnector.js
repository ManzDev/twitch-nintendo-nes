class NesConnector extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
      }

      .text {
        font-family: "Press Start 2P";
        font-size: 9px;
        color: #880020;
        text-align: center;
        margin-top: 8px;
      }

      .container {
        width: 30px;
        height: 44px;
        margin: 5px;
        border: 2px solid #111;
        border-radius: 8px;

        display: flex;
        justify-content: center;
        align-items: center;
      }

      .connector {
        width: 18px;
        height: 34px;
        border: 4px solid #000;
        border-radius: 20px 40px 20px 20px;

        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(4, 1fr);
        place-items: center;
      }

      .dot {
        background: #000;
        background-image: radial-gradient(#181818 25%, #000 25%);
        width: 7px;
        height: 7px;
        border-radius: 50%;
      }

      .dot:nth-child(2) {
        grid-column-start: 1;
      }
    `;
  }

  connectedCallback() {
    this.label = this.getAttribute("label") ?? "1";
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${NesConnector.styles}</style>
    <div class="text">${this.label}</div>
    <div class="container">
      <div class="connector">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>`;
  }
}

customElements.define("nes-connector", NesConnector);
