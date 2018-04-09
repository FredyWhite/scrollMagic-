$(document).ready(function(){
    setDebug();
    var alto =$(window).height();
    var ancho =$(window).width();
    if(alto > ancho){
       $("html").addClass("vr");

    }
    var controller = new ScrollMagic.Controller ({});
    var tweenLayoutE03 = new TimelineMax ()
    .add([
        TweenMax.fromTo("#layoutE03", 0.3, {opacity:2}, {opacity:0}),
        TweenMax.fromTo("#layoutE07", 0.2, {opacity:2}, {opacity:0}),
       
    ]);
    var scenelayoutE03 = new ScrollMagic.Scene({triggerElement: "#escena_0", offset:alto*.74, duration:alto/2})
    .setTween(tweenLayoutE03)
    .addIndicators()
    .addTo(controller);
    var tweenLayoutE04 = new TimelineMax ()
    .add([
        TweenMax.fromTo("#layoutE04", 0.3, {opacity:2}, {opacity:0}),
        TweenMax.fromTo("#layoutE08", 0.2, {opacity:2}, {opacity:0}),
    ]);
    var scenelayoutE04 = new ScrollMagic.Scene({triggerElement: "#escena_0", offset:alto*.74, duration:alto/2})
    .setTween(tweenLayoutE04)
    .addIndicators()
    .addTo(controller);
    var tweenLayoutE01 = new TimelineMax ()
    .add([
        TweenMax.fromTo("#layoutE01", 0.4, {opacity:2}, {opacity:0}),
        TweenMax.fromTo("#layoutE000", 0.6, {opacity:2}, {opacity:0}),
        TweenMax.fromTo("#layoutE05", 0.7, {opacity:2}, {opacity:0}),
    ]);
    var scenelayoutE01 = new ScrollMagic.Scene({triggerElement: "#escena_0", offset:alto*.44, duration:alto/2})
    .setTween(tweenLayoutE01)
    .addIndicators()
    .addTo(controller);
    var tweenLayoutE02 = new TimelineMax ()
    .add([
        TweenMax.fromTo("#layoutE02", 0.4, {opacity:2}, {opacity:0}),
        TweenMax.fromTo("#layoutE00", 0.6, {opacity:2}, {opacity:0}),
        TweenMax.fromTo("#layoutE06", 0.7, {opacity:2}, {opacity:0}),
    ]);
    var scenelayoutE02 = new ScrollMagic.Scene({triggerElement: "#escena_0", offset:alto*.44, duration:alto/2})
    .setTween(tweenLayoutE02)
    .addIndicators()
    .addTo(controller);

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
