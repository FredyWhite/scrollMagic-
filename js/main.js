$(document).ready(function(){
    var alto =$(window).height();
    var ancho =$(window).width();
    if(alto > ancho){
       $("html").addClass("vr");

    }
    var controller = new ScrollMagic.Controller ({});

    /* Escena Robot */
    var sceneRobot = new ScrollMagic.Scene({triggerElement: "#escena_1", offset:alto/5, duration:alto*2.3})
    .setPin("#robot")
    .addIndicators()
    .addTo(controller);
    

    /* Escena Robot */
    var tweenLayout = new TimelineMax ()
    .add([
        TweenMax.fromTo("#layout", 1, {x:-ancho/4}, {x:ancho/5}),
        TweenMax.fromTo("#layout", 0.3, {opacity:0}, {opacity:1}),
    ]);
    var sceneTweenLayout = new ScrollMagic.Scene({triggerElement: "#escena_2", offset:0, duration:alto})
    .setTween(tweenLayout)
    .addIndicators()
    .addTo(controller);
    var scenePinLayout = new ScrollMagic.Scene({triggerElement: "#escena_2", offset:alto/3, duration:alto*2.3})
    .setPin("#layout")
    .addIndicators()
    .addTo(controller);
});
