import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Lenis from "@studio-freight/lenis";

//Smooth Scroll
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// GSAP Scroll Trigger
gsap.to(".cookie", {
  scale: 2.3,
  scrollTrigger: {
    trigger: ".trigger-element",
    start: "top center",
    end: "bottom top",
    scrub: true,
  },
});

gsap.to(".title", {
  translateY: "-195",
  scale: 0.3,
  scrollTrigger: {
    trigger: ".trigger-element",
    start: "top center",
    end: "top top",
    scrub: true,
  },
});

gsap.to(".header-nav", {
  backgroundColor: "#1c3818",
  scrollTrigger: {
    trigger: ".trigger-element",
    start: "top center",
    end: "top top",
    scrub: true,
  },
});

// Burger Menu
const hamburger = document.querySelector(".hamburger");
const background = document.querySelector(".burger-background");

hamburger.addEventListener("click", show);
background.addEventListener("click", show);

function show() {
  hamburger.classList.toggle("open");
  document.querySelector(".burger-menu").classList.toggle("active");
  background.classList.toggle("active");
}

//Letter
// const letter = document.querySelector(".absolute-letter");

// letter.addEventListener("click", open);

// function open() {
//   document.querySelector(".closed-letter").classList.toggle("closed");
//   document.querySelector(".open-letter").classList.toggle("open");
// }

// gsap.to(".absolute-letter", {
//   x: "-35%",
//   scrollTrigger: {
//     trigger: ".so-what",
//     start: "bottom center",
//     end: "bottom 30%",
//     scrub: true,
//     markers: true,
//   },
// });

// Cookies Manager

gsap.to(
  [
    ".cookie-manager-c1",
    ".cookie-manager-c2",
    ".cookie-manager-c3",
    ".cookie-manager-c4",
    ".cookie-manager-c5",
    ".cookie-manager-c6",
    ".cookie-manager-c9",
    ".cookie-manager-c7",
  ],
  {
    scrollTrigger: {
      trigger: ".cards",
      markers: true,
      start: "top 90%",
      end: "bottom 40%",
      scrub: 1,
    },
    duration: 8,
    rotate: [40, 40, 10, 20, 20, 10, 40, 10],
  }
);
