gsap.to('.logo',{duration: 2, x:400, backgroundColor: "#560563", borderRadius:'20%', border:'5px solid white', ease:'Bounce.easeOut'});

gsap.set('.logo', {transformOrigin: '50% 50%'});
gsap.to('.logo', {duration: 20, rotation: 360});

var myObject = {rotation: 0};
gsap.to(myObject, {duration: 20, rotation: 360, onUpdate: function() {
    console.log(myObject.rotation);
}})