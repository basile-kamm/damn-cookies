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

hamburger.addEventListener("click", show);

function show() {
  hamburger.classList.toggle("open");
  document.querySelector(".burger-menu").classList.toggle("active");
  document.querySelector(".burger-background").classList.toggle("active");
}
