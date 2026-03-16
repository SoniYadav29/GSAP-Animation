gsap.registerPlugin(ScrollTrigger);

// Setup: hidden and centered
gsap.set("#box1, #box2", {
  x: 0,
  opacity: 0,
  display: "block",
});

// === SHOW & OPEN animation ===
const openTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".animationBox",
    start: "top center",
    end: "bottom 35%",
    scrub: true,
    onEnter: () => {
      gsap.set("#box1, #box2", {
        opacity: 1,
        pointerEvents: "auto",
      });
    },
    onLeaveBack: () => {
      gsap.set("#box1, #box2", {
        opacity: 0,
        pointerEvents: "none",
      });
    },
  },
});

openTimeline.to("#box1", { x: -750, duration: 3 }, 0);
openTimeline.to("#box2", { x: 750, duration: 3 }, 0);

// === CLOSE animation ===
const closeTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".extra",
    start: "top 30%",
    end: "bottom 85%",
    scrub: true,
  },
});

closeTimeline.to("#box1", { x: 0, duration: 3 }, 0);
closeTimeline.to("#box2", { x: 0, duration: 3 }, 0);

// === Final hide after close animation ===
ScrollTrigger.create({
  trigger: ".extra",
  start: "bottom 85%",
  onEnter: () => {
    gsap.to("#box1, #box2", {
      opacity: 0,
      pointerEvents: "none",
      duration: 0.5,
    });
  },
});
