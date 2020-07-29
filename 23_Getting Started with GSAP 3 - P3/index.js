gsap.from('.logo',{duration: 2, opacity: 0, scale: 0.3, ease:'Bounce.easeOut'});

var tween = gsap.from('.circle',{duration: 3, opacity: 0, y: 'random(-200,200)', stagger: 0.3, paused: true});


document.querySelector('#play').onclick = () => tween.play();
document.querySelector('#pause').onclick = () => tween.pause();
document.querySelector('#resume').onclick = () => tween.resume();
document.querySelector('#seek').onclick = () => tween.seek(2);
document.querySelector('#progress').onclick = () => tween.progress(0.2);
document.querySelector('#reverse').onclick = () => tween.reverse();
document.querySelector("#timeScale1").onclick = () => tween.timeScale(4);
document.querySelector("#timeScale2").onclick = () => tween.timeScale(0.2);
document.querySelector("#timeScale3").onclick = () => tween.timeScale(1);
document.querySelector("#restart").onclick = () => tween.restart();