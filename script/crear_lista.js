$(document).ready(function(){
    $("#crearlista_main").hide();

    $("#bt_crearlista").click(function(){
        $("#barra_musica").hide();
        $(".links").css({'bottom' : '20px'});
        $("#barra_musica").html("");
        $("#main1").hide();
        $("#maincuenta").hide();
        $("#main_listas").hide();
        $("#crearlista_main").show();
    });


    $("#bt_main_lista").click(function(){
        $("#main1").show();
        $("#maincuenta").hide();
        $("#main_perfil").hide();
        $("#main_listas").hide();
        $("#crearlista_main").hide();
    });
});