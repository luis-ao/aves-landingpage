const menuBtn = document.querySelector(".ham__iconOpen");
const exitBtn = document.querySelector(".ham__iconExit");

let t1 = gsap.timeline({ paused: true });
t1.to(".ham__menu", { opacity: 1, duration: 1, top: 0, ease: Power2.easeInOut });
t1.to(
    ".ham__nav",
    {
        opacity: 1,
        marginBottom: 0,
        duration: 1,
        ease: Power2.easeInOut,
        stagger: 0.3,
    },
    ">-0.5"
);

menuBtn.addEventListener("click", () => {
    t1.play().timeScale(1);
});

exitBtn.addEventListener("click", () => {
    t1.timeScale(2.5);
    t1.reverse();
});