class DireccionalPad extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        transform: translateY(10%);
      }

      .container {
        --size: calc(var(--width) * 0.22);

        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: var(--size);
        height: var(--size);
      }

      .dpad {
        background: #DBDBDB;
        border-radius: 5px;
      }

      .dpad.horizontal {
        width: calc(var(--size) * 0.41);
        height: 100%;
        position: absolute;
      }

      .dpad.vertical {
        width: 100%;
        height: calc(var(--size) * 0.41);
        position: absolute;
      }

      .dpad-inner {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        filter: drop-shadow(0 0 0 #111);
      }

      .dpad-inner .dpad {
        background: #282828;
      }

      .dpad-inner .dpad.horizontal {
        width: 90%;
        height: calc(var(--size) * 0.33);
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #393939;
        font-size: 22px;
      }

      .dpad-inner .dpad.vertical {
        width: calc(var(--size) * 0.33);
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        color: #393939;
        font-size: 22px;
      }

      .dpad-inner .center {
        background: #050505;
        width: 21%;
        height: 20%;
        border-radius: 50%;
        position: relative;
        z-index: 50;
      }

      .dpad-inner .dpad.horizontal span:first-child {
        --x: 4px;
        --y: -1px;
      }

      .dpad-inner .dpad.horizontal span:last-child {
        --x: -4px;
        --y: -1px;
      }

      .dpad-inner .dpad.vertical span:first-child {
        --y: -2px;
      }

      .dpad-inner .dpad.vertical span:last-child {
        --y: 2px;
      }

      .dpad-inner .dpad span {
        transform: translate(var(--x, 0), var(--y, 0));
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${DireccionalPad.styles}</style>
    <div class="container">
      <div class="dpad horizontal"></div>
      <div class="dpad vertical"></div>
      <div class="dpad-inner">
        <div class="dpad horizontal">
          <span>🡄</span>
          <span>🡆</span>
        </div>
        <div class="dpad vertical">
          <span>🡅</span>
          <span>🡇</span>
        </div>
        <div class="center"></div>
      </div>
    </div>`;
  }
}

customElements.define("direccional-pad", DireccionalPad);
