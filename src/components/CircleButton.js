class CircleButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      .container {
        --size: calc(var(--width) * 0.10);

        background: #CECECE;
        border-radius: 3px;
        width: var(--size);
        height: var(--size);

        display: flex;
        justify-content: center;
        align-items: center;
      }

      .button {
        width: calc(var(--size) * 0.8);
        height: calc(var(--size) * 0.8);
        background: #E5393F;
        border-radius: 50%;
        box-shadow: inset 1px 2px 2px #1E0606;
        overflow: hidden;
        position: relative;
      }

      .button::before {
        content: "";
        display: block;
        width: calc(var(--size) * 0.6);
        height: calc(var(--size) * 0.6);
        border-top: 2px solid #fff7;
        border-radius: 50%;
        position: absolute;
        top: 4px;
        left: 4px;
        transform: rotate(-40deg);
      }

      .button::after {
        content: "";
        display: block;
        background: #E25A61;
        width: calc(var(--size) * 0.4);
        height: calc(var(--size) * 0.4);
        border-radius: 50%;
        position: absolute;
        bottom: -1px;
        right: -1px;
        opacity: 0.75;
      }

      .label {
        margin-top: 3px;
        font-family: "Pretendo";
        font-size: 10px;
        color: #D23B40;
        text-align: right;
        transform: translateX(-15%);
      }

      .pressed {
        box-shadow: inset 0 0 2px 2px #1E0606;
        background: #ce3036;
      }

      .pressed::after {
        content: none;
      }

      .pressed::before {
        transform: rotate(180deg);
      }
    `;
  }

  press() {
    const button = this.shadowRoot.querySelector(".button");
    button.classList.add("pressed");
    const time = ~~(Math.random() * 4000) + 1000;
    setTimeout(() => this.press(), time);
    setTimeout(() => button.classList.remove("pressed"), 250);
  }

  connectedCallback() {
    this.label = this.getAttribute("label") ?? "A";
    this.render();
    this.press();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CircleButton.styles}</style>
    <div class="container">
      <div class="button"></div>
    </div>
    <div class="label">${this.label}</div>
    `;
  }
}

customElements.define("circle-button", CircleButton);
