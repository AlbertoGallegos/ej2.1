/* Menu Registro */

$(document).ready(function(){
  $(".overlay").hide();
  $("#ventana_ini").hide();
  $("#ventana_reg").hide();
  $("#ventana_cerrar").hide();
  
  /* Abrir menu reg */
  $("#bot_reg").click(function(){
    $(".overlay").show();
    $("#ventana_reg").show();
  });

  /* Abrir menu reg footer */
  $("#texto_footer").click(function(){
    $(".overlay").show();
    $("#ventana_ini").hide();
    $("#ventana_reg").show();
  });

  /* Cerrar reg con la cruz */
  $("#bt_cerrar1").click(function(){
    $(".overlay").hide();
    $("#ventana_reg").hide();
  })

  $("#bt_abriri_ini_reg").click(function(){
    $("#ventana_reg").hide();
    $(".overlay").hide();
    $(".overlay").show();
    $("#ventana_ini").show();
  });

});