class FooterComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const template = document.createElement("template");
    template.innerHTML = `
        <style>
          footer { height: 60px; background: #EAEAEA; padding: 8px 128px; }
          .flex { display: flex; }
          .justify-between { justify-content: space-between; }
          .align-items { align-items: center; }
          footer p { color: #757575; font-family: Montserrat; font-size: 14px; font-weight: 400; line-height: 24px; }
          .footer-menu a { text-decoration: none; color: #757575; font-family: Montserrat; font-size: 14px; font-weight: 400; line-height: 24px; }
          .footer-menu a:hover { color: #5BC8AF; }
          @media (max-width: 1439px) {
            .footer-bar { flex-wrap: wrap; justify-content: center; }
          }
          @media (max-width: 900px) {
            footer { height: 100px; background: #EAEAEA; padding: 8px 128px; }
          }
          @media (max-width: 767px) {
            footer { height: 100px; padding: 0px; }
            footer p, .footer-menu a { font-size: 12px; line-height: 22px; }
          }
        </style>
        <footer role="contentinfo">
          <div class="flex justify-between align-items footer-bar">
            <p id="copyright"></p>
            <div class="footer-menu">
              <p id="footer-links"></p>
            </div>
          </div>
        </footer>
      `;
    shadow.appendChild(template.content.cloneNode(true));
    this.loadContent(shadow);
  }

  async loadContent(shadow) {
    try {
      const response = await fetch("./js/content.json");
      const data = await response.json();
      shadow.querySelector("#copyright").innerHTML = data.footer.copyright;
      const links = data.footer.links
        .map(
          (link) =>
            `<a href="${link.href}" aria-label="${link.text}">${link.text}</a>`
        )
        .join(" &nbsp; | &nbsp; ");
      shadow.querySelector("#footer-links").innerHTML = links;
    } catch (error) {
      console.error("Error loading footer content:", error);
    }
  }
}

customElements.define("footer-component", FooterComponent);
