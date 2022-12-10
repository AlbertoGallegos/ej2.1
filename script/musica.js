/* Musica */

$(document).ready(function(){
  $("#barra_musica").hide();

  $(".play").click(function(){
    elementos();
    $("#barra_musica").html('<audio controls autoplay><source src="images/'+$(this).attr("id")+'" type="audio/mpeg"></audio>');
  });

  $(".campob").click(function(){
    elementos();
    $("#barra_musica").html('<audio controls autoplay><source src="images/'+$(this).attr("id")+'" type="audio/mpeg"></audio>');
  });

  function elementos() {
    $("#barra_musica").show();
    $(".links").css({'bottom':'70px'});
  };
});

