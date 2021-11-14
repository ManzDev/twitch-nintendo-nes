class NesConsoleTop extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      .container {
        width: var(--width);
        height: var(--depth);
        background: linear-gradient(#C1C3C2, #B4B4B4, #A9A9A9);

        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
      }

      .invisible-square {
        width: 400px;
        height: 375px;
        position: relative;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
      }

      .right-part {
        --black: #111;

        background:
          linear-gradient(to bottom, var(--black) 0 30px, #000 30px 32px, var(--black) 32px 70px, transparent 70px),
          linear-gradient(to top, var(--black) 0 25%, transparent 25%),
          repeating-linear-gradient(
            to bottom,
            var(--black) 0 2%,
            transparent 2% 4%
          );
        border-left: 1px solid #aaa;
        border-right: 1px solid #aaa;
        width: 91px;
        height: 100%;
        position: absolute;
        z-index: 5;
      }

      .bottom-part {
        width: 100%;
        height: 92px;
        position: absolute;
        border: 2px solid #888;
        border-left: 2px solid #555;
        border-bottom: 0;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${NesConsoleTop.styles}</style>
    <div class="container">
      <div class="invisible-square">
        <div class="right-part"></div>
        <div class="bottom-part"></div>
      </div>
    </div>`;
  }
}

customElements.define("nes-console-top", NesConsoleTop);
