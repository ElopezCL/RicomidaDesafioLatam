$(document).ready(function () {
    $("button").tooltip()
})

$('#enviar_correo').click(function () {

    alert("Correo enviado correctamente")
})

$('.card-title').click(function(){
    $('.recetas-relacionadas p').toggle("hide");
})