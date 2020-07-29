var tl = gsap.timeline({repeat:-1, yoyo: true});


tl.from('.logo',{duration: 2, opacity: 0, scale: 0.3, ease:'Bounce.easeOut'});
tl.to('.logo', {duration:1, rotation: 360});
tl.from('.circle',{duration: 1.5, opacity: 0, y: 200, stagger: 0.3}, '+=1');
tl.addLabel('circlesOutro', '+=1');
tl.to(".circle", {duration: 0.5, opacity: 0, x: 300 , ease: 'power3.out'}, 'circlesOutro');