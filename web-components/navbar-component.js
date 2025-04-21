class NavbarComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const template = document.createElement("template");
    template.innerHTML = `
        <style>
          .nav-container { 
            display: flex; 
            justify-content: space-between; 
            align-items: center; 
            background-color: transparent;  
            padding: 10px 20px;
          }
          .logo img { 
            width: 100%; 
            max-width: 200px; 
          }
          .menu-toggle { 
            display: none; 
            cursor: pointer; 
          }
          .menu-toggle span { 
            display: block; 
            width: 25px; 
            height: 3px; 
            background-color: #fff; 
            margin-bottom: 5px; 
            transition: transform 0.3s ease; 
          }
          .menu-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
          }
          .menu-toggle.active span:nth-child(2) {
            opacity: 0;
          }
          .menu-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -7px);
          }
          .navbar { 
            display: flex; 
            align-items: center; 
          }
          .menu { 
            list-style-type: none; 
            display: flex; 
            margin: 0; 
            padding: 0; 
          }
          .menu li { 
            padding: 0 15px; 
          }
          .menu li a { 
            color: #FFFFFF; 
            text-align: center; 
            font-size: 14px; 
            font-weight: 400; 
            line-height: 41px; 
            text-decoration: none; 
            text-transform: uppercase; 
            position: relative; 
            display: inline-block; 
          }
          .menu li a.active { 
            font-weight: 700; 
            color: #5BC8AF;
          }
          .menu li a.active::after { 
            content: ''; 
            position: absolute; 
            left: 0; 
            bottom: 11px; 
            width: 100%; 
            height: 2px; 
            background-color: #5BC8AF;
          }
          .menu li a:hover {
            color: #5BC8AF;
          }
          .contact { 
            margin-left: 31px; 
          }
          .contact p { 
            color: #FFF; 
            font-size: 14px; 
            font-weight: 700; 
            line-height: 41px; 
            margin: 0; 
          }
          .contact p span { 
            color: #5BC8AF; 
          }
          #mobile-sec { 
            display: none; 
          }
          #separator { 
            display: none; 
          }
          @media (max-width: 767px) {
            .menu-toggle { 
              display: block; 
              position: absolute; 
              top: 20px; 
              right: 20px; 
            }
            .navbar { 
              display: none; 
              position: absolute; 
              top: 60px; 
              left: 0; 
              right: 0; 
              background-color: #194D44; 
              padding: 20px; 
              max-height: 0; 
              overflow: hidden; 
              transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out; 
              opacity: 0; 
            }
            .navbar.show { 
              display: block; 
              max-height: 300px; 
              opacity: 1;
            }
            .menu { 
              flex-direction: column; 
              align-items: flex-start; 
            }
            .menu li { 
              padding: 10px 0; 
            }
            .contact { 
              display: none; 
            }
            #mobile-sec { 
              display: block; 
            }
            #mobile-sec a p { 
              color: #FFF; 
              font-size: 14px; 
              font-weight: 700; 
              line-height: 41px; 
              margin: 0; 
            }
            #mobile-sec a p span { 
              color: #5BC8AF; 
            }
            .divider {
              display: none;
            }
          }
          @media (min-width: 768px) and (max-width: 992px) {
            .nav-container { 
              flex-wrap: wrap; 
              justify-content: space-between; 
              padding: 0;
            }
            .navbar { 
              display: flex; 
              flex-direction: column;
              position: relative;
              top: 1rem; 
            }
            .menu { 
              display: flex; 
              flex-direction: row; 
            }
            .menu li { 
              padding: 0 10px; 
            }
            .contact { 
              display: block; 
              margin-left: 20px; 
            }
            #mobile-sec { 
              display: none; 
            }
            .divider {
              display: none;
            }
          }
        </style>
        <div class="nav-container" role="banner">
          <div class="logo">
            <a href="index.html" aria-label="Home">
              <img src="./assets/logo.webp" alt="Get an Intervention Logo" draggable="false" fetchPriority="high" />
            </a>
          </div>
          <div class="menu-toggle" aria-label="Toggle Menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="navbar">
            <nav role="navigation" aria-label="Main Navigation">
              <ul class="menu">
                <li><a href="#home" class="active" aria-current="page" data-page="home">Home</a></li>
                <li><a href="#about" data-page="about">About</a></li>
                <li><a href="#contact" data-page="contact">Contact</a></li>
                <li class="divider"><a href="#" data-page="divider">|</a></li>
                <li id="mobile-sec">
                  <a href="tel:123.456.7890" aria-label="Call for a consultation">
                    <p>CALL NOW FOR A CONSULT <span>123.456.7890</span></p>
                  </a>
                </li>
              </ul>
            </nav>
            <div class="contact">
              <p>CALL NOW FOR A CONSULT <span>123.456.7890</span></p>
            </div>
          </div>
        </div>
      `;
    shadow.appendChild(template.content.cloneNode(true));
    this.setupEventListeners(shadow);
  }

  setupEventListeners(shadow) {
    const menuToggle = shadow.querySelector(".menu-toggle");
    const navbar = shadow.querySelector(".navbar");
    const navLinks = shadow.querySelectorAll(".menu li a[data-page]");

    menuToggle.addEventListener("click", () => {
      navbar.classList.toggle("show");
      menuToggle.classList.toggle("active");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();

        navLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");

        if (navbar.classList.contains("show")) {
          navbar.classList.remove("show");
          menuToggle.classList.remove("active");
        }

        const page = link.getAttribute("data-page");
        this.dispatchEvent(
          new CustomEvent("pageChange", {
            detail: { page },
            bubbles: true,
            composed: true,
          })
        );
      });
    });
  }
}

customElements.define("navbar-component", NavbarComponent);
