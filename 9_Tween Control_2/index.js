var tween = gsap.to("img.fred", {duration: 2, y: -250,ease: "bounce.inOut",yoyo: true, repeat: -1, stagger:{
    amount: 1,
    each: 0.5,
    // from: 'center',
    // from: 'end',
    from: 'edges',
}, paused: true});

document.getElementById("play").onclick = () => tween.play();
document.getElementById("pause").onclick = () => tween.pause();
document.getElementById("resume").onclick = () => tween.resume();
document.getElementById("reverse").onclick = () => tween.reverse();
document.getElementById("restart").onclick = () => tween.restart();