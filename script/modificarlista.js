$(document).ready(function(){
    $("#main_listas").hide();

    $("#bt_mislistas").click(function(){
        $("#barra_musica").hide();
        $(".links").css({'bottom' : '20px'});
        $("#barra_musica").html("");
        $("#main1").hide();
        $("#maincuenta").hide();
        $("#crearlista_main").hide();
        $("#main_perfil").hide();
        $("#main_listas").show();
    });

    $(".nombre_lista").click(function(){
        $("#barra_musica").hide();
        $(".links").css({'bottom' : '20px'});
        $("#barra_musica").html("");
        $("#main1").hide();
        $("#maincuenta").hide();
        $("#crearlista_main").hide();
        $("#main_perfil").hide();
        $("#main_listas").show();
    });

    let dragging=false;
    $(".content-list").droppable({
        drop: function(event, ui) {
            if($(ui.draggable).hasClass("list")){
            $(this).append("<div class='colum'>"+$(ui.draggable).html()+"</div>");
            }
        }
    });
    $(".content-list").sortable();

});