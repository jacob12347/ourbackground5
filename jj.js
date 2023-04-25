gsap.registerPlugin(ScrollTrigger);


let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".content p",
    pin: ".container",
    start: "top 35%",
    end: "+=800px top",
    scrub: 1,
    markers: true,
  },
});

tl.addLabel("1")
  .to(".content p", { backgroundPositionY: "100%", duration: 7 })
  .addLabel("2")
  .to(".content span", { opacity: 1, duration: 0.2 })
  .addLabel("3")
  .to(".content span", { duration: 4 })
  .addLabel("end");
// gsap.to(".content p", {
//   backgroundPositionY: "100%",
//   stagger: 1,
//   scrollTrigger: {
//     trigger: ".content",
//     markers: true,
//     pin:".container",
//     scrub: true,
//     start: "top 30%",
//     end: "bottom top",
//   },
// });

// gsap
//   .timeline()
//   .from(".content p", {
//     backgroundPositionY: "100%",
//     stagger: 1,
//     scrollTrigger: {
//       trigger: ".content",
//       markers: true,
//       pin: ".container",
//       scrub: true,
//       start: "top 30%",
//       end: "bottom top",
//     },
//   })
//   .fromTo(
//     ".endcontent",
//     { toggleClass: "active" },
//     {
//       backgroundPositionY: "100%",
//       scrollTrigger: {
//         trigger: "..endcontent",
//         markers: true,
//         pin: ".container",
//         scrub: true,
//         start: "top 30%",
//         end: "bottom top",
//       },
//     }
//   );



// const tl = gsap.timeline({
//   ScrollTrigger: {
//     trigger: ".content p",
//     markers: true,
//     pin: ".container",
//     scrub: 1,
//     start: "top 30%",
//     end: "bottom top",
//   }
// });

// tl.to(".content p", { backgroundPositionY: "100%", duration: 7 })
//   .to(".endcontent", { opacity: 1, duration: 1 })
//   .to(".endcontent", { backgroundPositionY: "100%", duration: 2 })
//   .to(".endcontent", { backgroundPositionY: "0", duration: 2 });
