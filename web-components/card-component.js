class CardComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = `
      .img-box {
        width: 100%;
        height: 180px;
        background: #C4C4C4;
        border-radius: 8px;
        overflow: hidden;
        margin-bottom: 20px;
      }
      
      .img-box img {
        width: 371px;
        height: 100%;
        object-position: center;
        object-fit: cover;
      }
      
      @media (max-width: 992px) {
        .img-box img {
          width: 224px;
          height: 180px;
        }
      }
      
      @media (max-width: 767px) {
        .img-box {
          display: none;
        }
      }
    `;

    const imgBox = document.createElement("div");
    imgBox.className = "img-box";

    const img = document.createElement("img");
    img.src = this.getAttribute("image") || "";
    img.alt = this.getAttribute("alt") || "";

    imgBox.appendChild(img);
    shadow.appendChild(style);
    shadow.appendChild(imgBox);
  }
}

customElements.define("card-component", CardComponent);
