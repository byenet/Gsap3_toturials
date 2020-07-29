var tween = gsap.to('.fred', {duration:3, x:600,rotation: 360 ,ease:'linear', paused: true});

document.getElementById("play").onclick = () => tween.play();
document.getElementById('pause').onclick = ()  => tween.pause();
document.getElementById('reverse').onclick = ()  => tween.reverse();
document.getElementById('restart').onclick = ()  => tween.restart();