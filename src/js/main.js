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
  scale: 2,
  scrollTrigger: {
    trigger: ".cookie-1",
    start: "top 60%",
    end: "bottom top",
    scrub: true,
  },
});

gsap.to(".title", {
  scale: 0.5,
  scrollTrigger: {
    trigger: ".cookie-1",
    start: "top center",
    end: "bottom 30%",
    markers: true,
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
