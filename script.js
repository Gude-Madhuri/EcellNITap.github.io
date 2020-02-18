AOS.init();
$("#spy").scrollspy();

window.onscroll = function() {scrollFunction()};
var mybutton = document.getElementById("myBtn");
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var cnt = document.getElementsByClassName("navbar-nav")[0];

var tween = new TimelineLite();

tween.add(
    TweenLite.to(".navbar-nav", .5, {
        x: cnt.offsetLeft,
        ease: Power1.easeInOut
    })
);

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
    duration: 500,
    triggerHook: 0,
}).setTween(tween)
.addTo(controller);

window.onresize = function(){

}

function fadeOut() {

    TweenMax.to(".screen", 2, {
        y: -400,
        opacity: 0,
        ease: Power2.easeInOut,
        delay: 2
    });

    TweenMax.from(".overlay", 2, {
        ease: Power2.easeInOut
    });

    TweenMax.to(".overlay", 2, {
        delay: 2.6,
        top: "-110%",
        ease: Expo.easeInOut
    });

    TweenMax.to(".overlay-2", 1.5, {
        delay: 3,
        top: "-110%",
        ease: Expo.easeInOut
    });

    TweenMax.to(".navbar", 2, {
        opacity: 1,
        delay: 3.2,
        ease: Power2.easeInOut
    });

    TweenMax.from("#ei", .3, {
        width: "30vw",
        delay: 5,
        opacity: 0, 
        ease: Power2.Expo
    })

    TweenMax.from("#na", .3, {
        width: "30vw",
        opacity: 0,
        delay: 5,
        ease: Power2.Expo
    })

}

document.getElementsByClassName("containerLand")[0].style.display = "None";
if(window.scrollY==0){
    document.getElementsByClassName("containerLand")[0].style.display = "block";
    fadeOut();
    window.setTimeout(function(){
        document.getElementsByTagName("body")[0].style.overflowY="hidden";
    }, 1)
    window.setTimeout(function(){
        document.getElementsByTagName("body")[0].style.overflow="auto";
    }, 3600) 
} else{
    TweenMax.to(".navbar", 2, {
        opacity: 1,
        ease: Power2.easeInOut
    });
}