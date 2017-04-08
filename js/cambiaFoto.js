/*CAMBIA LAS FOTOS DE CIRCULOS EN PRINCIPAL*/
$(document).ready(function () {
    $('#foto1').mouseenter(function () {
        $('#foto1').attr("src","/assets/img/anancomica2.jpg");
    });
    $('#foto1').mouseleave(function () {
        $('#foto1').attr("src","/assets/img/anan25.jpg");
    });
    $('#foto2').mouseenter(function () {
        $('#foto2').attr("src","/assets/img/angocomica2.jpg");
    });
    $('#foto2').mouseleave(function () {
        $('#foto2').attr("src","/assets/img/ango25.jpg");
    });
    /*CARGA DE IMAGENES MÁS LENTA EN AMIGOS*/
    $("img.lazy").lazyload({
         effect : "fadeIn"
     });
});