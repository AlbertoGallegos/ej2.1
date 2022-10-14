let bt_abrir = document.getElementById("bot_ini");
let bt_abrir_ini_reg = document.getElementById("bt_abrir_ini_reg");
let overlay = document.getElementById("overlay");
let ventana = document.getElementById("ventana");
let bt_cerrar = document.getElementById("bt_cerrar");


bt_abrir.addEventListener("click", function(){
    overlay.classList.add("active");
    ventana.classList.add("active");
});

bt_abrir_ini_reg.addEventListener("click", function(){
    overlay.classList.add("active");
    ventana.classList.add("active");
});

bt_cerrar.addEventListener("click", function(){
    overlay.classList.remove("active");
    ventana.classList.remove("active");
});