const x=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))b(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&b(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function b(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}};x();class n extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}press(){const t=this.shadowRoot.querySelector(".button");t.classList.add("pressed");const o=~~(Math.random()*4e3)+1e3;setTimeout(()=>this.press(),o),setTimeout(()=>t.classList.remove("pressed"),250)}connectedCallback(){var t;this.label=(t=this.getAttribute("label"))!=null?t:"A",this.render(),this.press()}render(){this.shadowRoot.innerHTML=`
    <style>${n.styles}</style>
    <div class="container">
      <div class="button"></div>
    </div>
    <div class="label">${this.label}</div>
    `}}customElements.define("circle-button",n);class s extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${s.styles}</style>
    <div class="container">
      <div class="dpad horizontal"></div>
      <div class="dpad vertical"></div>
      <div class="dpad-inner">
        <div class="dpad horizontal">
          <span>\u{1F844}</span>
          <span>\u{1F846}</span>
        </div>
        <div class="dpad vertical">
          <span>\u{1F845}</span>
          <span>\u{1F847}</span>
        </div>
        <div class="center"></div>
      </div>
    </div>`}}customElements.define("direccional-pad",s);class a extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${a.styles}</style>
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
    </div>`}}customElements.define("nes-controller",a);class d extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${d.styles}</style>
    <div class="container">
      <div class="invisible-square">
        <div class="right-part"></div>
        <div class="bottom-part"></div>
      </div>
    </div>`}}customElements.define("nes-console-top",d);class l extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`

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
    `}connectedCallback(){var t;this.label=(t=this.getAttribute("label"))!=null?t:"text",this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${l.styles}</style>
    <div class="button-container">
      <div class="button">
        <span class="text">${this.label}</span>
      </div>
    </div>`}}customElements.define("nes-button",l);class c extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){var t;this.label=(t=this.getAttribute("label"))!=null?t:"1",this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${c.styles}</style>
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
    </div>`}}customElements.define("nes-connector",c);class p extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${p.styles}</style>
    <div class="container">
      <div class="top-container">
        <div class="door-container">
          <div class="door">
            <div class="brand">NaNtendo</div>
            <div class="model">Entertainment System\u2122</div>
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
    </div>`}}customElements.define("nes-console-front",p);class h extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${h.styles}</style>
    <div class="container">
      <nes-console-top></nes-console-top>
      <nes-console-front></nes-console-front>
    </div>`}}customElements.define("nes-console",h);
