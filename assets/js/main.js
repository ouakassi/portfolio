/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.querySelector(".nav__menu");
const navToggle = document.querySelector(".nav__toggle");
const navClose = document.querySelector(".nav__close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
    // navToggle.style.visibility = "hidden";
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    // navToggle.style.visibility = "visible";
  });
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  navMenu.classList.remove("show-menu");
  // navToggle.style.visibility = "visible";
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.querySelectorAll(".skills__content");
const skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;
  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}
skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) =>
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  })
);

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal");
const modalBtns = document.querySelectorAll(".services__button");
const modalCloses = document.querySelectorAll(".services__modal-close");
const modalContent = document.querySelector(".services__modal-content");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

// Close Modal when clicking in the transparent background

modalViews.forEach((modalView) => {
  modalView.addEventListener(
    "click",
    (myFunction = (e) => {
      if (e.target.classList.contains("services__modal")) {
        // if (e.target.className === "services__modal active-modal") {
        modalView.classList.remove("active-modal");
      }
    })
  );
});

// Close Modal when clicking close "X" button

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/*==================== PORTFOLIO Slider  ====================*/

// const slider = function (
//   slidesClass,
//   btnLeftClass,
//   btnRightClass,
//   dotsClass,
//   dotsButton
// ) {
//   const slides = document.querySelectorAll(slidesClass);
//   const btnLeft = document.querySelector(btnLeftClass);
//   const btnRight = document.querySelector(btnRightClass);
//   const dotContainer = document.querySelector(dotsClass);

//   let curSlide = 0;
//   const maxSlide = slides.length;

//   // Functions
//   const createDots = function () {
//     slides.forEach(function (_, i) {
//       dotContainer.insertAdjacentHTML(
//         "beforeend",
//         `<button class="${dotsButton}" data-slide="${i}"></button>`
//       );
//     });
//   };

//   const activateDot = function (slide) {
//     document
//       .querySelectorAll(`.${dotsButton}`)
//       .forEach((dot) => dot.classList.remove(`${dotsButton}--active`));

//     document
//       .querySelector(`.${dotsButton}[data-slide="${slide}"]`)
//       .classList.add(`${dotsButton}--active`);
//   };

//   const goToSlide = function (slide) {
//     slides.forEach(
//       (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
//     );
//   };

//   // Next slide
//   const nextSlide = function () {
//     if (curSlide === maxSlide - 1) {
//       curSlide = 0;
//     } else {
//       curSlide++;
//     }

//     goToSlide(curSlide);
//     activateDot(curSlide);
//   };

//   const prevSlide = function () {
//     if (curSlide === 0) {
//       curSlide = maxSlide - 1;
//     } else {
//       curSlide--;
//     }
//     goToSlide(curSlide);
//     activateDot(curSlide);
//   };

//   const init = function () {
//     goToSlide(0);
//     createDots();

//     activateDot(0);
//   };
//   init();

//   // Event handlers
//   btnRight.addEventListener("click", nextSlide);
//   btnLeft.addEventListener("click", prevSlide);

//   document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowLeft") prevSlide();
//     e.key === "ArrowRight" && nextSlide();
//   });

//   dotContainer.addEventListener("click", function (e) {
//     if (e.target.classList.contains(`${dotsButton}`)) {
//       const { slide } = e.target.dataset;
//       goToSlide(slide);
//       activateDot(slide);
//     }
//   });
// };
// slider(
//   ".portfolio__content",
//   ".slider__btn--left",
//   ".slider__btn--right",
//   ".dots",
//   "dots__dot"
// );

// ///////////////////////////////////////
// /*==================== TESTIMONIAL ====================*/
// slider(
//   ".testimonial__content",
//   ".testimonial__btn--left",
//   ".testimonial__btn--right",
//   ".testimonial__dots",
//   "testimonial__dots-dot"
// );

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);
/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/////////////////////////////////////////////

// const headerName = document.querySelector(".home__title-name");

// const myName = "oussama".toUpperCase().split("");
// if (myName.length === 7) {
//   let callMyName = () => {
//     myName.forEach((letter, i) => {
//       setTimeout(() => {
//         headerName.insertAdjacentText("beforebegin", letter);
//         console.log(letter);
//       }, i * 600);
//     });
//   };
// }

// setInterval(() => {
//   headerName.nodeValue = "";

//   callMyName();
// }, 5000);

// console.log(myName);
// myName.forEach((letter, i) => {
//   setInterval(() => {
//     headerName.insertAdjacentText("beforebegin", letter);
//     console.log(letter);
//   }, i * 4000);
//   if (headerName.textContent.length >= 8) headerName.textContent = "8";
// });

//------------------- Loading content ------------------ //

const spinnerContainer = document.querySelector("#spinner__container");
const spinner = document.querySelector("#spinner");

document.addEventListener("DOMContentLoaded", function (e) {
  spinnerContainer.classList.add("spinner__container");
  spinner.classList.add("spinner__on");
});

window.addEventListener("load", function (e) {
  spinnerContainer.classList.remove("spinner__container");
  spinner.classList.replace("spinner__on", "spinner__off");
});

window.addEventListener("scroll", (e) => {
  if (window.pageYOffset === 700) console.log("hey");
});
