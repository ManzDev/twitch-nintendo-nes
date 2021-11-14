class NesButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`

      .button-container {
        border: 3px solid #444;
        border-top-color: #333;
        border-bottom-color: #888;
        border-right-color: #666;
        width: 45px;
        height: 22px;
        margin: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
      }

      .button {
        width: 45px;
        height: 22px;
        border-radius: 2px;
        background: #686463;
        box-shadow:
          inset 0 2px 2px #aaa,
          inset 2px 0 3px #777,
          0 1px 2px 2px #222,
          0 1px 4px 4px #2228;
        margin: 0 8px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        position: absolute;
      }

      .text {
        font-family: Pretendo;
        font-size: 9px;
        color: #800;
        text-transform: uppercase;
        transform: translateY(-3px);
      }
    `;
  }

  connectedCallback() {
    this.label = this.getAttribute("label") ?? "text";
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${NesButton.styles}</style>
    <div class="button-container">
      <div class="button">
        <span class="text">${this.label}</span>
      </div>
    </div>`;
  }
}

customElements.define("nes-button", NesButton);
