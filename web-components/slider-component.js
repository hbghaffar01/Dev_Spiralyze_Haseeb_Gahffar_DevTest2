class SliderComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const template = document.createElement("template");
    template.innerHTML = `
        <style>
          .slider-box { position: relative; padding: 0px 128px 80px; margin-top: -30px; }
          .slider-container { position: relative; max-width: 83%; margin: auto; overflow: hidden; border-radius: 10px; }
          .slider { display: flex; transition: transform 0.5s ease-in-out; }
          .slide { min-width: 100%; transition: opacity 1s ease-in-out; display: flex; gap: 35px; }
          .slider-image { width: 270px; height: 100%; flex-shrink: 0; }
          .slider-image img { border-radius: 10px 0 0 10px; object-fit: cover; width: 100%; height: 100%; }
          .text-content { padding: 62px 65px 45px 65px; background-color: #194D44; color: white; border-radius: 0 10px 10px 0; display: flex; flex-direction: column; justify-content: center; }
          .text-content .qoute-icon { position: absolute; top: -20px; right: 0px; }
          .text-content h2 { color: #FFF; font-family: Montserrat; font-size: 24px; font-weight: 700; line-height: 34px; }
          .text-content p { color: #FFF; font-family: Montserrat; font-size: 18px; font-style: italic; font-weight: 400; line-height: 28px; margin-top: 16px; }
          .slide-inner { position: relative; }
          .prev-btn, .next-btn { position: absolute; top: 40%; transform: translateY(-50%); background-color: transparent; border: none; cursor: pointer; padding: 10px; border-radius: 50%; font-size: 24px; z-index: 10; }
          .prev-btn { left: 128px; }
          .next-btn { right: 128px; }
          .prev-btn:hover svg path, .next-btn:hover svg path { fill: #5BC8AF; }
          .dots-container { text-align: center; position: absolute; bottom: 0; width: 100%; right: -50%; transform: translateX(-50%); }
          .dot { display: inline-block; width: 12px; height: 12px; margin: 0 10px; background-color: #EAEAEA; border-radius: 50%; cursor: pointer; transition: background-color 0.3s ease; }
          .dot.active { background-color: #5BC8AF; }
          @media (max-width: 1439px) {
            .slider-box { padding: 0 24px 65px 24px; }
            .slider-container { max-width: 100%; }
            .slider-image { width: 198.367px; height: 100%; }
            .text-content { padding: 30px; }
            .text-content h2 { font-size: 18px; line-height: 28px; }
            .text-content p { font-size: 14px; line-height: 24px; }
            .qoute-icon svg { width: 40px; height: 31px; }
            .prev-btn, .next-btn { display: none; }
            .slide { gap: 25px; }
          }
          @media (max-width: 992px) {
          .slider-box {
            position: relative;
            margin-top: 10px !important;
          }
          }
          @media (max-width: 767px) {
            .slider-box { margin-top: 50px; padding: 0 16px; }
            .slide { display: block; }
            .slider-image { width: 180.669px; height: 180.669px; margin-bottom: -150px; margin-left: 30px; }
            .slider-image img { border-radius: 10px 10px 0px 0px; }
            .text-content h2 { padding-top: 150px; }
            .text-content .qoute-icon { top: 70px; right: 0px; }
            .qoute-icon svg { width: 60px; height: 47px; }
            .text-content p { padding-bottom: 72px; }
            .dots-container {
                bottom: 1rem;
              }
          }
        </style>
        <div class="slider-box" role="region" aria-label="Testimonial Slider">
          <div class="slider-container">
            <div class="slider"></div>
          </div>
          <button class="prev-btn" aria-label="Previous Slide">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M36.24 39.76L20.48 24L36.24 8.24L32 4L12 24L32 44L36.24 39.76Z" fill="#EAEAEA" />
            </svg>
          </button>
          <button class="next-btn" aria-label="Next Slide">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M11.76 8.24L27.52 24L11.76 39.76L16 44L36 24L16 4L11.76 8.24Z" fill="#EAEAEA" />
            </svg>
          </button>
          <div class="dots-container" role="tablist"></div>
        </div>
      `;
    shadow.appendChild(template.content.cloneNode(true));
    this.loadSlides(shadow);
  }

  async loadSlides(shadow) {
    try {
      const response = await fetch("./js/content.json");
      const data = await response.json();
      const slider = shadow.querySelector(".slider");
      const dotsContainer = shadow.querySelector(".dots-container");
      data.slider.forEach((slide, index) => {
        const slideDiv = document.createElement("div");
        slideDiv.classList.add("slide");
        slideDiv.innerHTML = `
            <div class="slider-image">
              <img src="${slide.image}" alt="${slide.name} testimonial" draggable="false" fetchPriority="low" />
            </div>
            <div class="text-content">
              <div class="slide-inner">
                <h2>${slide.name}</h2>
                <p>${slide.text}</p>
                <div class="qoute-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="47" viewBox="0 0 60 47" fill="none">
                    <path d="M19.5804 21.9794C21.9114 22.9931 23.7296 24.5137 25.035 26.5412C26.3403 28.5686 26.993 30.9647 26.993 33.7294C26.993 37.6922 25.7343 40.9176 23.2168 43.4059C20.6993 45.802 17.4825 47 13.5664 47C9.65035 47 6.38695 45.7559 3.77622 43.2676C1.25874 40.7794 0 37.6 0 33.7294C0 31.8863 0.2331 30.0431 0.699301 28.2C1.1655 26.3569 2.19114 23.5922 3.77622 19.9059L11.8881 0H25.7343L19.5804 21.9794ZM52.5874 21.9794C54.9184 22.9931 56.7366 24.5137 58.042 26.5412C59.3473 28.5686 60 30.9647 60 33.7294C60 37.6922 58.7413 40.9176 56.2238 43.4059C53.7063 45.802 50.4895 47 46.5734 47C42.6573 47 39.3939 45.7559 36.7832 43.2676C34.2657 40.7794 33.007 37.6 33.007 33.7294C33.007 31.8863 33.2401 30.0431 33.7063 28.2C34.1725 26.3569 35.1981 23.5922 36.7832 19.9059L44.8951 0H58.7413L52.5874 21.9794Z" fill="#2A7C6B" />
                  </svg>
                </div>
              </div>
            </div>
          `;
        slider.appendChild(slideDiv);
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.setAttribute("role", "tab");
        dot.setAttribute("aria-label", `Slide ${index + 1}`);
        dot.addEventListener("click", () => this.showSlide(shadow, index));
        dotsContainer.appendChild(dot);
      });
      this.setupSlider(shadow);
    } catch (error) {
      console.error("Error loading slider content:", error);
    }
  }

  setupSlider(shadow) {
    const slider = shadow.querySelector(".slider");
    const slides = shadow.querySelectorAll(".slide");
    const dots = shadow.querySelectorAll(".dot");
    let currentSlide = 0;
    const totalSlides = slides.length;

    const updateDots = () => {
      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentSlide);
      });
    };

    const showSlide = (index) => {
      currentSlide = (index + totalSlides) % totalSlides;
      slider.style.transform = `translateX(-${currentSlide * 100}%)`;
      updateDots();
    };

    shadow
      .querySelector(".next-btn")
      .addEventListener("click", () => showSlide(currentSlide + 1));
    shadow
      .querySelector(".prev-btn")
      .addEventListener("click", () => showSlide(currentSlide - 1));

    let autoplayInterval = setInterval(() => showSlide(currentSlide + 1), 5000);
    shadow
      .querySelector(".slider-container")
      .addEventListener("mouseenter", () => clearInterval(autoplayInterval));
    shadow
      .querySelector(".slider-container")
      .addEventListener("mouseleave", () => {
        autoplayInterval = setInterval(() => showSlide(currentSlide + 1), 5000);
      });

    showSlide(currentSlide);
  }

  showSlide(shadow, index) {
    const slider = shadow.querySelector(".slider");
    const dots = shadow.querySelectorAll(".dot");
    const totalSlides = shadow.querySelectorAll(".slide").length;
    let currentSlide = (index + totalSlides) % totalSlides;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((dot, i) =>
      dot.classList.toggle("active", i === currentSlide)
    );
  }
}

customElements.define("slider-component", SliderComponent);
