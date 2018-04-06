$(document).ready(function(){
    setDebug();
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
    

    /* Escena Layout */
    var tweenLayout = new TimelineMax ()
    .add([
        TweenMax.fromTo("#layout", 1, {x:-ancho/4}, {x:ancho/5}),
        TweenMax.fromTo("#layout", 0.3, {opacity:0}, {opacity:1}),
    ]);
    var sceneTweenLayout = new ScrollMagic.Scene({triggerElement: "#escena_2", offset:0, duration:alto/2})
    .setTween(tweenLayout)
    .addIndicators()
    .addTo(controller);
    var scenePinLayout = new ScrollMagic.Scene({triggerElement: "#escena_2", offset:alto/3, duration:alto*2.6})
    .setPin("#layout")
    .addIndicators()
    .addTo(controller);

    /* Escena BD */
    var tweenBD = new TimelineMax ()
    .add([
        TweenMax.fromTo("#BD", 0.5, {x:-ancho/4}, {x:ancho/3}),
    ]);
    var sceneTweenBD = new ScrollMagic.Scene({triggerElement: "#escena_3", offset:0, duration:alto/2})
    .setTween(tweenBD)
    .addIndicators()
    .addTo(controller);
    var scenePinLayout = new ScrollMagic.Scene({triggerElement: "#escena_3", offset:alto/3, duration:alto*1.3})
    .setPin("#BD")
    .addIndicators()
    .addTo(controller);

});
function setDebug(){
   $(window).scroll(function(evento){
    $("#debug").html($(window).scrollTop());
   })
};
