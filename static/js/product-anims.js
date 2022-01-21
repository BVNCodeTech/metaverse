//  animations

// scroll animations
gsap.from(".headset", {
    scrollTrigger: {
        trigger: ".headset", 
        ease: "power2.in"
    },
    y: 200,
    opacity:'0',
    duration:1
});

gsap.from(".glasses", {
    scrollTrigger: {
        trigger: ".glasses", 
        ease: "power2.in"
    },
    y: 200,
    opacity:'0',
    duration:1.5
});

gsap.from(".pen", {
    scrollTrigger: {
        trigger: ".pen", 
        ease: "power2.in"
    },
    y: 200,
    opacity:'0',
    duration:1.5
});

