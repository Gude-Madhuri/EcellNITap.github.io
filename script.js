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