/* Menu inicio pop-up */

$(document).ready(function(){
  $(".overlay").hide();
  $("#ventana_ini").hide();

  /* Abrir menu ini */
  $("#bot_ini").click(function(){
    $(".overlay").show();
    $("#ventana_ini").show();
  });

  /* Abrir menu ini desde reg */
  $("#bt_abrir_ini_reg").click(function(){
    $("#ventana_reg").hide();
    $("#ventana_ini").show();
  });

  /* Cerrar reg con la cruz */
  $("#bt_cerrar").click(function(){
    $(".overlay").hide();
    $("#ventana_ini").hide();
  });
  
  $(".play").click(function(){
    $(".overlay").show();
    $("#ventana_ini").show();
  });



});