let bt_abrir_reg = document.getElementById("bot_reg");
let main1 = document.getElementById("main1");
let reg = document.getElementById("reg");
let bt_cerrar_reg = document.getElementById("bt_main1");


bt_abrir_reg.addEventListener("click", function(){
    reg.classList.add("active");
    main1.classList.add("active");
});

bt_cerrar_reg.addEventListener("click", function(){
    main1.classList.remove("active");
    reg.classList.remove("active");
});