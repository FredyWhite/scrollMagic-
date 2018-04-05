$(document).ready(function(){
    var alto =$(window).height();
    var ancho =$(window).width();
    if(alto > ancho){
       $("html").addClass("vr");

    }
    var controller = new ScrollMagic.Controller ({});

    /* Escena Robot */
    var sceneRobot = new ScrollMagic.Scene({triggerElement: "#escena_1", offset:alto/4, duration:alto})
    .setPin("#robot")
    .addIndicators()
    .addTo(controller);
    

});
