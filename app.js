const toggle = document.querySelectorAll(".toggleMore");
const displayContent = document.querySelectorAll(".show-more-content");
const fadeEffect = document.querySelector(".target");
const fadeEffect2 = document.querySelector(".targe-1");
const fadeEffect3 = document.querySelector(".targe-2");

toggle.forEach((button, index) => {
  button.addEventListener("click", () => {
    displayContent.forEach((element, idx) => {
      let getAttribute = element.getAttribute("data-show");
      if (idx === index && getAttribute === "false") {
        element.removeAttribute("data-close");
        element.setAttribute("data-show", "true");
      } else if (idx === index && getAttribute === "true") {
        element.setAttribute("data-show", "false");
        element.addEventListener(
          "animationend",
          () => {
            element.setAttribute("data-close", "");
          },
          { once: true }
        );
      }
    });
  });
});

// fade effect
fadeEffect.addEventListener("mouseover", () => {
  fadeEffect2.classList.add("fade");
  fadeEffect3.classList.add("fade-1");
});
fadeEffect.addEventListener("mouseout", () => {
  fadeEffect2.classList.remove("fade");
  fadeEffect3.classList.remove("fade-1");
});
// second
fadeEffect2.addEventListener("mouseover", () => {
  fadeEffect.classList.add("fade");
  fadeEffect3.classList.add("fade");
});
fadeEffect2.addEventListener("mouseout", () => {
  fadeEffect.classList.remove("fade");
  fadeEffect3.classList.remove("fade");
});
// last
fadeEffect3.addEventListener("mouseover", () => {
  fadeEffect2.classList.add("fade");
  fadeEffect.classList.add("fade-1");
});
fadeEffect3.addEventListener("mouseout", () => {
  fadeEffect2.classList.remove("fade");
  fadeEffect.classList.remove("fade-1");
});
