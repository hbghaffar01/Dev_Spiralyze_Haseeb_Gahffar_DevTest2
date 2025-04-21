document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";
    document.body.style.overflow = "auto";
  }, 2000);

  fetch("./js/content.json")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector("#thankyou-heading").innerHTML =
        data.thankyou.heading;
      document.querySelector("#thankyou-subheading").innerHTML =
        data.thankyou.subheading;
      document.querySelector("#thankyou-message-1").innerHTML =
        data.thankyou.message1;
      document.querySelector("#thankyou-message-2").innerHTML =
        data.thankyou.message2;
    })
    .catch((error) => console.error("Error loading thankyou content:", error));
});
