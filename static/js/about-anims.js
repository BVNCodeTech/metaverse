// --------------- ABOUT -----------------
//  animations
gsap.from('header .right', {duration: 1, x:'10%', opacity:'0', ease: "power2.out", delay:0.5});
gsap.from('header .left', {duration: 1, x:'-10%', opacity:'0', ease: "power2.out", delay:0.5});
gsap.from('.header .closed-menu', {duration: 2, y:'-10%', opacity:'0', ease: "power2.out", delay:0.5});
gsap.from('.logo-container', {duration: 2, y:'-10%', opacity:'0', ease: "power2.out", delay:0.5});
gsap.from('.social-links', {duration: 2, y:'10%', opacity:'0', ease: "power2.out", delay:0.5});

// scroll animations
gsap.from(".who", {
    scrollTrigger: {
        trigger: ".who", 
        ease: "power2.in"
    },
    y: 200,
    opacity:'0',
    duration:1
});

gsap.from(".why", {
    scrollTrigger: {
        trigger: ".why", 
        ease: "power2.in"
    },
    y: 200,
    opacity:'0',
    duration:1.5
});

gsap.from(".what", {
    scrollTrigger: {
        trigger: ".what", 
        ease: "power2.in"
    },
    y: 200,
    opacity:'0',
    duration:1.5
});
