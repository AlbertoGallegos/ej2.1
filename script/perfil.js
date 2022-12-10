$(document).ready(function(){
    $("#main_perfil").hide();

    $("#bt_perfil").click(function(){
        $("#barra_musica").hide();
        $(".links").css({'bottom' : '20px'});
        $("#barra_musica").html("");
        $("#main1").hide();
        $("#maincuenta").hide();
        $("#crearlista_main").hide();
        $("#main_listas").hide();
        $("#main_perfil").show();
    });



    $("#c1").html('<image src="images/sin_like.png" id="cruz"></image>');
    $("#c2").html('<image src="images/sin_like.png" id="cruz"></image>');
    $("#c3").html('<image src="images/sin_like.png" id="cruz"></image>');
    $("#c4").html('<image src="images/sin_like.png" id="cruz"></image>');
    $("#c5").html('<image src="images/sin_like.png" id="cruz"></image>');

    $("#l1").hide();
    $("#l2").hide();
    $("#l3").hide();
    $("#l4").hide();
    $("#l5").hide();

    $("#c1").click(function(){
        if ($(this).attr("class") == "like likeada"){
            $(this).html('<image src="images/sin_like.png" id="cruz"></image>');
            $(this).removeClass("likeada");
            $("#l1").hide();
        }else {
            $(this).addClass("likeada");
            $(this).html('<image src="images/like.png" id="cruz"></image>'); 
            $("#l1").show();
        }    
    });

    $("#c2").click(function(){
        if ($(this).attr("class") == "like likeada"){
            $(this).html('<image src="images/sin_like.png" id="cruz"></image>');
            $(this).removeClass("likeada");
            $("#l2").hide();
        }else {
            $(this).addClass("likeada");
            $(this).html('<image src="images/like.png" id="cruz"></image>');
            $("#l2").show(); 
        }    
    });

    $("#c3").click(function(){
        if ($(this).attr("class") == "like likeada"){
            $(this).html('<image src="images/sin_like.png" id="cruz"></image>');
            $(this).removeClass("likeada");
            $("#l3").hide();
        }else {
            $(this).addClass("likeada");
            $(this).html('<image src="images/like.png" id="cruz"></image>'); 
            $("#l3").show();
        }    
    });

    $("#c4").click(function(){
        if ($(this).attr("class") == "like likeada"){
            $(this).html('<image src="images/sin_like.png" id="cruz"></image>');
            $(this).removeClass("likeada");
            $("#l4").hide();
        }else {
            $(this).addClass("likeada");
            $(this).html('<image src="images/like.png" id="cruz"></image>'); 
            $("#l4").show();
        }    
    });

    $("#c5").click(function(){
        if ($(this).attr("class") == "like likeada"){
            $(this).html('<image src="images/sin_like.png" id="cruz"></image>');
            $(this).removeClass("likeada");
            $("#l5").hide();
        }else {
            $(this).addClass("likeada");
            $(this).html('<image src="images/like.png" id="cruz"></image>'); 
            $("#l5").show();
        }    
    });

});