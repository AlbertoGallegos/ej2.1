
$(document).ready(function(){

    $(".overlay").hide();
    $("#ventana_cerrar").hide();

    $("#cerrar_sesion").click(function(){
        $(".overlay").show();
        $("#ventana_cerrar").show();
    });
    
    $("#no_cerrar").click(function(){
        $(".overlay").hide();
        $("#vantana_cerrar").hide();
    });

    $("#si_cerrar").click(function(){
        $(".overlay").hide();
        $("#ventana_cerrar").hide();
        $("#barra_musica").hide();
        $("#barra_musica").html('');
        $(".links").css({'bottom':'70px'});
        window.open("index.html", "_self");
        return false;    
    });
   
});
