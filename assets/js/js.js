
// esconde al hacer click el titulo Destacados las imagenes
$(document).ready(function(){
    $("#destacados").click(function(){
        $(".card-img-top").toggle();
        });
        });
// esconde al hacer click el titulo Quienes somos
$(document).ready(function(){
    $("#quienes").click(function(){
        $(this).toggle();
        });
        });


// Agrega Mensaje al boton enviar
$(document).ready(function(){
$('[data-toggle="tooltip"]').tooltip();   
});