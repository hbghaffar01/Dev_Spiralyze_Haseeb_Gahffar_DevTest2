class TooltipComponent extends HTMLElement {
  static get observedAttributes() {
    return ["tooltip-text", "service-text"];
  }

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    this.wrapper = document.createElement("div");
    this.wrapper.className = "tooltip-wrapper";
    this.serviceBox = document.createElement("div");
    this.serviceBox.className = "serv-boxes";
    this.serviceInner = document.createElement("div");
    this.serviceInner.className = "serv-inner";

    this.serviceText = document.createElement("p");
    this.serviceText.textContent = this.getAttribute("service-text") || "";
    this.serviceInner.appendChild(this.serviceText);

    this.button = document.createElement("button");
    this.button.setAttribute(
      "aria-label",
      this.getAttribute("aria-label") || "Tooltip"
    );
    this.button.className = "tooltip-button";
    this.button.innerHTML = `
      <svg class="info-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <g clip-path="url(#clip0_5_65)">
          <path d="M13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="#5BC8AF"></path>
          <path class="circle" d="M3.5 12C3.5 7.30814 7.30814 3.5 12 3.5C16.6919 3.5 20.5 7.30814 20.5 12C20.5 16.6919 16.6919 20.5 12 20.5C7.30814 20.5 3.5 16.6919 3.5 12Z" stroke="#5BC8AF"></path>
        </g>
        <defs>
          <clipPath id="clip0_5_65">
            <rect width="24" height="24" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
    `;

    this.serviceBox.appendChild(this.serviceInner);
    this.serviceBox.appendChild(this.button);
    this.tooltipContent = document.createElement("div");
    this.tooltipContent.className = "tooltip-content";
    this.tooltipContent.innerHTML = `<span>${
      this.getAttribute("tooltip-text") || ""
    }</span>`;

    const style = document.createElement("style");
    style.textContent = `
      .tooltip-wrapper {
        position: relative;
        width: 371px;
      }
      .serv-boxes {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #ffffff;
        border: 1px solid #5BC8AF;
        border-radius: 8px;
        padding: 25px;
        transition: border-color 0.3s ease;
      }
      .serv-inner {
        flex-grow: 1;
      }
      .serv-inner p {
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        font-weight: 600;
        color: #000000;
        text-align: center;
        transition: color 0.3s ease;
      }
      .tooltip-button {
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        width: 24px;
        height: 24px;
      }
      .tooltip-content {
        visibility: hidden;
        width: 300px;
        background-color: #2a7d6c;
        color: #fff;
        text-align: left;
        border-radius: 6px;
        padding: 12px 16px;
        position: absolute;
        top: calc(100% + 10px);
        left: 50%;
        transform: translateX(-50%);
        z-index: 99;
        opacity: 0;
        transition: opacity 0.3s ease, visibility 0.3s ease;
      }
      .tooltip-content::after {
        content: "";
        position: absolute;
        bottom: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent #2a7d6c transparent;
      }
      .tooltip-wrapper:hover .tooltip-content {
        visibility: visible;
        opacity: 1;
      }
      .tooltip-content span {
        color: #fff;
        font-family: 'Montserrat', sans-serif;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
      }
      .info-icon {
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      .tooltip-wrapper:hover .info-icon {
        opacity: 1;
      }
      .tooltip-wrapper:hover .serv-inner p {
        color: #5BC8AF;
      }
      @media (max-width: 992px) {
        .tooltip-wrapper {
          position: relative;
          width: 324px;
        }
      }
`;

    this.wrapper.appendChild(this.serviceBox);
    this.wrapper.appendChild(this.tooltipContent);
    shadow.appendChild(style);
    shadow.appendChild(this.wrapper);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "tooltip-text" && oldValue !== newValue) {
      this.tooltipContent.innerHTML = `<span>${newValue || ""}</span>`;
    }
    if (name === "service-text" && oldValue !== newValue) {
      this.serviceText.textContent = newValue || "";
    }
  }
}

customElements.define("tooltip-component", TooltipComponent);
