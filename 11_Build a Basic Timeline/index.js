// gsap.from('body', {duration: 1, opacity:0});
// gsap.from('.title', {duration: 1, delay:1, opacity:0, scale:0});
// gsap.from('img.fred', {duration: 0.5, delay:2, scale:0, stagger:0.5});
// gsap.from('.time', {duration: 1, delay:5, opacity:0, xPercent: 20});


gsap.timeline()
    .from('body', {duration: 1,opacity:0})
    .from('.title', {opacity:0, scale:0, easing: 'back'})
    .from('img.fred', {y:160, stagger:0.3, easing: 'back', duration: 0.8})
    .from('.time', {xPercent:20, duration: 0.5})