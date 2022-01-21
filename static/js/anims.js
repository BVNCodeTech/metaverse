// --------------- HOME ----------------
//  animations
gsap.from('header .chup', {duration: 1, y:'5%', opacity: '0',ease: "power2.out", delay: 0.5});
gsap.from('header .right', {duration: 1, x:'10%', opacity:'0', ease: "power2.out", delay:0.5});


// scroll animations
gsap.from(".about", {
    scrollTrigger: {
        trigger: ".about", 
        ease: "power2.in"
    },
    y: 200,
    opacity:'0',
    duration:1
});

gsap.from(".exploration", {
    scrollTrigger: {
        trigger: ".exploration", 
        ease: "power2.in"
    },
    y: 200,
    opacity:'0',
    duration:1.5
});

gsap.from(".faqs", {
    scrollTrigger: {
        trigger: ".faqs", 
        ease: "power2.in"
    },
    y: 200,
    opacity:'0',
    duration:1.5
});

gsap.from(".join .text", {
    scrollTrigger: {
        trigger: ".join .text", 
        ease: "power2.in"
    },
    y: 50,
    opacity:'0',
    duration:2
});