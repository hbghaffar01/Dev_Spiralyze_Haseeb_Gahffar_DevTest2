document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("./js/content.json");
    if (!response.ok) {
      throw new Error(`Failed to fetch content.json: ${response.statusText}`);
    }
    const data = await response.json();

    const heroHeading = document.querySelector("#hero-heading");
    const heroText = document.querySelector("#hero-text");
    if (heroHeading)
      heroHeading.innerHTML = data.hero.heading || "Default Heading";
    if (heroText) heroText.innerHTML = data.hero.text || "Default Text";

    const contactHeading = document.querySelector("#contact-heading");
    if (contactHeading)
      contactHeading.innerHTML = data.contact.heading || "Contact Us";

    const understandHeading = document.querySelector("#understand-heading");
    const understandText1 = document.querySelector("#understand-text-1");
    const understandText2 = document.querySelector("#understand-text-2");
    const understandText3 = document.querySelector("#understand-text-3");
    const understandText4 = document.querySelector("#understand-text-4");
    const understandText5 = document.querySelector("#understand-text-5");

    const understandMobileText1 = document.querySelector(
      "#understand-mobile-text-1"
    );
    const understandMobileText2 = document.querySelector(
      "#understand-mobile-text-2"
    );
    if (understandHeading)
      understandHeading.innerHTML = data.understand.heading || "WE UNDERSTAND";
    if (understandText1)
      understandText1.innerHTML = `<p>${
        data.understand.text1 || "Default text 1"
      }</p>`;
    if (understandText2)
      understandText2.innerHTML = `<p>${
        data.understand.text2 || "Default text 2"
      }</p>`;
    if (understandText3)
      understandText3.innerHTML = `<p>${
        data.understand.text3 || "Default text 3"
      }</p>`;
    if (understandText4)
      understandText4.innerHTML = `<p>${
        data.understand.text1 || "Default text 3"
      }</p>`;
    if (understandText5)
      understandText5.innerHTML = `<p>${
        data.understand.text2 || "Default text 3"
      }</p>`;
    if (understandMobileText1)
      understandMobileText1.innerHTML = `<p>${
        data.understand.mobile_text1 || "Default mobile text 1"
      }</p>`;
    if (understandMobileText2)
      understandMobileText2.innerHTML = `<p>${
        data.understand.mobile_text2 || "Default mobile text 2"
      }</p>`;

    const organizeHeading = document.querySelector("#organize-heading");
    const interventionsText = document.querySelector("#interventions-text");
    const lonelinessText = document.querySelector("#loneliness-text");
    const methodologyText = document.querySelector("#methodology-text");
    if (organizeHeading)
      organizeHeading.innerHTML =
        data.organize.heading || "WE CAN ORGANIZE EVERYTHING";
    if (interventionsText)
      interventionsText.innerHTML = `<p>${
        data.organize.interventions || "Default interventions text"
      }</p>`;
    if (lonelinessText)
      lonelinessText.innerHTML = `<p>${
        data.organize.loneliness || "Default loneliness text"
      }</p>`;
    if (methodologyText)
      methodologyText.innerHTML = `<p>${
        data.organize.methodology || "Default methodology text"
      }</p>`;

    const serviceElements = [
      document.querySelector("#service-1"),
      document.querySelector("#service-2"),
      document.querySelector("#service-3"),
      document.querySelector("#service-4"),
      document.querySelector("#service-5"),
      document.querySelector("#service-6"),
    ];
    serviceElements.forEach((element, index) => {
      if (element) {
        element.innerHTML =
          data.services[`service${index + 1}`] || `Service ${index + 1}`;
      }
    });
    const populateTooltips = () => {
      const tooltips = document.querySelectorAll("tooltip-component");
      if (tooltips.length === 0) {
        console.log("No tooltip components found in the DOM. Retrying...");
        setTimeout(populateTooltips, 100);
        return;
      }
      tooltips.forEach((tooltip, index) => {
        const serviceText =
          data.services[`service${index + 1}`] || `Service ${index + 1}`;
        const tooltipText =
          data.services[`tooltip${index + 1}`] || `Tooltip ${index + 1}`;
        tooltip.setAttribute("service-text", serviceText);
        tooltip.setAttribute("tooltip-text", tooltipText);
        console.log(
          `Set tooltip ${
            index + 1
          }: service-text="${serviceText}", tooltip-text="${tooltipText}"`
        );
      });
    };
    populateTooltips();

    const videoHeading = document.querySelector("#video-heading");
    const videoService1 = document.querySelector("#video-service-1");
    const videoService1Text = document.querySelector("#video-service-1-text");
    const videoService2 = document.querySelector("#video-service-2");
    const videoService2Text = document.querySelector("#video-service-2-text");
    const videoService3 = document.querySelector("#video-service-3");
    const videoService3Text = document.querySelector("#video-service-3-text");

    if (videoHeading) {
      videoHeading.innerHTML = data.video.heading || "WATCH THE VIDEO";
    } else {
      console.error("Element with ID 'video-heading' not found");
    }

    if (videoService1) {
      videoService1.innerHTML = data.video.service1 || "Needs Assessment";
    } else {
      console.error("Element with ID 'video-service-1' not found");
    }
    if (videoService1Text) {
      videoService1Text.innerHTML =
        data.video.service1_text || "Default service 1 text";
      console.log("Video Service 1 Text:", videoService1Text.innerHTML);
    } else {
      console.error("Element with ID 'video-service-1-text' not found");
    }

    if (videoService2) {
      videoService2.innerHTML = data.video.service2 || "Insurance Advocacy";
    } else {
      console.error("Element with ID 'video-service-2' not found");
    }
    if (videoService2Text) {
      videoService2Text.innerHTML =
        data.video.service2_text || "Default service 2 text";
      console.log("Video Service 2 Text:", videoService2Text.innerHTML);
    } else {
      console.error("Element with ID 'video-service-2-text' not found");
    }

    if (videoService3) {
      videoService3.innerHTML =
        data.video.service3 || "Treatment Planning & Placement";
    } else {
      console.error("Element with ID 'video-service-3' not found");
    }
    if (videoService3Text) {
      videoService3Text.innerHTML =
        data.video.service3_text || "Default service 3 text";
      console.log("Video Service 3 Text:", videoService3Text.innerHTML);
    } else {
      console.error("Element with ID 'video-service-3-text' not found");
    }

    const countrySelect = document.querySelector("#country");
    if (countrySelect) {
      data.countries.forEach((country) => {
        const option = document.createElement("option");
        option.value = country.value;
        option.textContent = country.name;
        countrySelect.appendChild(option);
      });
    } else {
      console.error("Country select element with ID 'country' not found");
    }
  } catch (error) {
    console.error("Error loading content:", error);
  }

  const form = document.getElementById("contactForm");
  const formControls = document.querySelectorAll(".form-control");

  if (form) {
    formControls.forEach((input) => {
      input.tooltipTimeout = null;
      input.addEventListener("focus", () => {
        const label = input.nextElementSibling;
        if (label && label.classList.contains("label")) {
          label.classList.add("label-active");
        }
        if (input.tooltipTimeout) {
          clearTimeout(input.tooltipTimeout);
          input.tooltipTimeout = null;
        }
      });

      input.addEventListener("blur", () => {
        const label = input.nextElementSibling;
        const errorMessage =
          input.parentElement.querySelector(".error-message");
        const isValid =
          input.value.trim() !== "" &&
          (input.id !== "country" || input.value !== "blank");

        if (isValid) {
          if (label && label.classList.contains("label")) {
            label.classList.add("label-active");
          }
          if (errorMessage) {
            errorMessage.classList.remove("active");
            setTimeout(() => {
              input.parentElement.classList.remove("error");
            }, 200);
          }
        } else {
          if (label && label.classList.contains("label")) {
            label.classList.remove("label-active");
          }
          if (errorMessage) {
            errorMessage.classList.add("active");
            input.parentElement.classList.add("error");
            if (input.tooltipTimeout) {
              clearTimeout(input.tooltipTimeout);
            }
            input.tooltipTimeout = setTimeout(() => {
              errorMessage.classList.remove("active");
              setTimeout(() => {
                input.parentElement.classList.remove("error");
              }, 200);
              input.tooltipTimeout = null;
            }, 1000);
          }
        }
      });

      input.addEventListener("input", () => {
        const errorMessage =
          input.parentElement.querySelector(".error-message");
        const isValid =
          input.value.trim() !== "" &&
          (input.id !== "country" || input.value !== "blank");

        if (input.tooltipTimeout) {
          clearTimeout(input.tooltipTimeout);
          input.tooltipTimeout = null;
        }

        if (isValid && errorMessage) {
          errorMessage.classList.remove("active");
          setTimeout(() => {
            input.parentElement.classList.remove("error");
          }, 200);
        }
      });
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      let isValid = true;

      formControls.forEach((input) => {
        const errorMessage =
          input.parentElement.querySelector(".error-message");
        const inputIsValid =
          input.value.trim() !== "" &&
          (input.id !== "country" || input.value !== "blank");

        if (input.tooltipTimeout) {
          clearTimeout(input.tooltipTimeout);
          input.tooltipTimeout = null;
        }

        if (!inputIsValid) {
          if (errorMessage) {
            errorMessage.classList.add("active");
            input.parentElement.classList.add("error");
            input.tooltipTimeout = setTimeout(() => {
              errorMessage.classList.remove("active");
              setTimeout(() => {
                input.parentElement.classList.remove("error");
              }, 200);
              input.tooltipTimeout = null;
            }, 1000);
          }
          isValid = false;
        } else {
          if (errorMessage) {
            errorMessage.classList.remove("active");
            setTimeout(() => {
              input.parentElement.classList.remove("error");
            }, 200);
          }
        }
      });

      if (isValid) {
        window.location.href = "thankyou.html";
      }
    });
  } else {
    console.error("Form with ID 'contactForm' not found");
  }

  const modal = document.getElementById("myModal");
  const closeBtn = modal ? modal.querySelector(".close") : null;
  const modalVideo = document.getElementById("modalVideo");

  if (!modal || !closeBtn || !modalVideo) {
    console.error("Modal elements not found:", { modal, closeBtn, modalVideo });
    return;
  }

  const playVideo = () => modalVideo.play();
  const pauseVideo = () => modalVideo.pause();

  const adjustButtons = () => {
    const screenWidth = window.innerWidth;
    const mobileButton = document.querySelector(".vid-mob-btn");
    const desktopButton = document.querySelector(".vid-col");
    let btn;

    if (screenWidth <= 768) {
      if (desktopButton) desktopButton.remove();
      btn = mobileButton ? mobileButton.querySelector("#vid-play-btn") : null;
    } else {
      if (mobileButton) mobileButton.remove();
      btn = desktopButton ? desktopButton.querySelector("#vid-play-btn") : null;
    }

    if (btn) {
      btn.addEventListener("click", () => {
        modal.style.display = "flex";
        modalVideo.currentTime = 0;
        playVideo();
        setTimeout(() => {
          const modalContent = modal.querySelector(".modal-content");
          if (modalContent) {
            modalContent.style.transform = "translateX(0)";
          }
        }, 50);
      });
    } else {
      console.error("Video play button not found");
    }
  };

  adjustButtons();
  window.addEventListener("resize", adjustButtons);

  closeBtn.addEventListener("click", () => {
    const modalContent = modal.querySelector(".modal-content");
    if (modalContent) {
      modalContent.style.transform = "translateX(-100%)";
    }
    setTimeout(() => {
      modal.style.display = "none";
      pauseVideo();
    }, 300);
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      const modalContent = modal.querySelector(".modal-content");
      if (modalContent) {
        modalContent.style.transform = "translateX(-100%)";
      }
      setTimeout(() => {
        modal.style.display = "none";
        pauseVideo();
      }, 300);
    }
  });
  // preload image
  const preloadImage = new Image();
  preloadImage.src = "../assets/hero-bg.webp";
  preloadImage.src = "../assets/logo.webp";
  preloadImage.onload = () => {
    console.log("Hero background image loaded");
  };

  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
      preloader.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }, 1000);
});
