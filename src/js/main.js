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
      start: "top 90%",
      end: "bottom 40%",
      scrub: 1,
    },
    duration: 8,
    rotate: [40, 40, 10, 20, 20, 10, 40, 10],
  }
);

// Highlight
gsap.utils.toArray("span").forEach((span) => {
  ScrollTrigger.create({
    trigger: span,
    start: "top 70%",
    onEnter: () => span.classList.add("active"),
  });
});

// Dog

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".dog",
    markers: false,
    start: "top 50%",
    endTrigger: ".last-one",
    end: "bottom bottom",
    scrub: 1,
    pin: ".dog",
  },
});

tl.to(".dog", { x: "70vw", duration: 1.2 })
  .to(".dog", { rotationY: 180 })
  .to(".dog", { x: "-5vw", duration: 1.2 })
  .to(".dog", { rotationY: 0 })
  .to(".dog", { x: "70vw", duration: 1.4 })
  .to(".dog", { rotationY: 180 })
  .to(".dog", { x: "20vw" })
  .to(".dog", { rotationY: 0 })
  .to(".dog", { x: "40vw", duration: 0.8 })
  .to(".dog", { x: "70vw" })
  .to(".dog", { rotationY: 180 });

gsap.to(".cookie-good-1", {
  y: "-5vh",
  scrollTrigger: {
    trigger: ".cookie-slide",
    start: "top bottom",
    end: "top 70%",
    scrub: true,
    onLeave: () => {
      document.querySelector(".cookie-good-1").classList.add("invisible");
    },
  },
});

gsap.to(".cookie-good-2", {
  y: "-5vh",
  scrollTrigger: {
    trigger: ".cookie-good-2",
    start: "top bottom",
    end: "top 70%",
    scrub: true,
    onLeave: () => {
      document.querySelector(".cookie-good-2").classList.add("invisible");
    },
  },
});

gsap.to(".cookie-bad-1", {
  y: "-100vh",
  scrollTrigger: {
    trigger: ".cookie-bad-1",
    start: "top 90%",
    end: "top top",
    scrub: true,
  },
});

gsap.to(".cookie-bad-2", {
  y: "-100vh",
  scrollTrigger: {
    trigger: ".cookie-bad-2",
    start: "top 90%",
    end: "top top",
    markers: true,
    scrub: true,
  },
});

gsap.to(".cookie-bad-3", {
  y: "-100vh",
  scrollTrigger: {
    trigger: ".cookie-bad-3",
    start: "top 90%",
    end: "top top",
    markers: true,
    scrub: true,
  },
});
