//  animations
gsap.from('header .right', {duration: 1, x:'10%', opacity:'0', ease: "power2.out", delay:0.5});
gsap.from('header .left', {duration: 1, x:'-10%', opacity:'0', ease: "power2.out", delay:0.5});
gsap.from('.header .closed-menu', {duration: 2, y:'-10%', opacity:'0', ease: "power2.out", delay:0.5});
gsap.from('.logo-container', {duration: 2, y:'-10%', opacity:'0', ease: "power2.out", delay:0.5});
gsap.from('.social-links', {duration: 2, y:'20%', opacity:'0', ease: "power2.out", delay:0.5});
