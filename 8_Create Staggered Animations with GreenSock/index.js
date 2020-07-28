// repeat infinity thi de repeat: -1
gsap.to("img.fred", {duration: 2, y: -250,ease: "bounce.inOut",repeat: -1,yoyo: true, stagger:{
    amount: 1,
    each: 0.5,
    // from: 'center',
    // from: 'end',
    from: 'edges',
    
}});

