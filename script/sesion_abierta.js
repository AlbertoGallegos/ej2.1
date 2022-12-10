/*Inicio de sesion */

$(document).ready(function(){
    u_name1 = sessionStorage.getItem("u_name1");
    $("#menu_perfil").hide();
    $("#user").html(u_name1);
    $(".links").css({'bottom':'20px'});
    mostrarFoto();
    $("#myBuscador").hide();

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
        }
        return "";
    }
    
    function mostrarFoto() {
        let foto = getCookie(u_name1+"photo");
        if ( foto == null ) {
            $("#photoi2").hide();
            $("#photoi1").show();
        }
        else {
            $("#photoi1").hide();
            n = getRandomInt(9);
            $("#photoi2").html('<img class="foto_perfil" src="images/perfil/'+n+'.jpg" alt="f perfil logeado"></img>');
            $("#photoi2").show();
        }
    
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      

        /* Mostramos el menu del perfil, funcional con mouse*/

    $("#photo").mouseenter(function(){
        $("#menu_perfil").show();
    });

    $("#photo").mouseleave(function(){
        $("#menu_perfil").hide();
    });

    $("#menu_perfil").mouseenter(function(){
        $("#menu_perfil").show();
    });

    $("#menu_perfil").mouseleave(function(){
        $("#menu_perfil").hide();
    });

    /* Mostramos el menu del perfil vompatible para tablets y moviles */

    $("#photo").click(function(){
        $("#menu_perfil").show();
    });

    $("aside").click(function(){$("#menu_perfil").hide()});
    $("main").click(function(){$("#menu_perfil").hide()});

    /*buscador*/
    $(".buscadorbtn").click(function(){
        $("#myBuscador").show();
        $(".item").hide();
        $(this).hide();
    }); 

    $("#bt_buscar").click(function(){
        $("#myBuscador").show();
        $(".item").hide();
        $(".buscadorbtn").hide();
    });
    

    $('#myInput').keyup(function(){
        let nombres = $('.campob');
        let buscando = $(this).val().toLowerCase();
        let item='';
        for( var i = 0; i < nombres.length; i++ ){
            item = $(nombres[i]).html().toLowerCase();
             for(var x = 0; x < item.length; x++ ){
                if( buscando.length == 0 || item.indexOf( buscando ) > -1 ){
                    $(nombres[i]).parents('.item').show(); 
                }else{
                    $(nombres[i]).parents('.item').hide();
                }
            }
        }
    });

    $("header").click(function(){$(".item").hide()});
    $("aside").click(function(){$(".item").hide()});
    $("main").click(function(){$(".item").hide()});


    $(".artista").click(function(e){
        e.preventDefault();
        window.open("artista.html", "_self");
        return false;
    });
    $(".perfil").click(function(e){
        e.preventDefault();
        window.open("perfil.html", "_self");
        return false;
    });
  
});


/*$("#myInput").keyup(function(){
        let input, filter, ul, li, a, i;
        input = $("#myInput");
        filter = input.val().toUpperCase();
        div = $("#myBuscador");
        a = $("#myBucador :a");
        for (i = 0; i < a.length; i++) {
            alert("for");
            txtValue = a[i].text() || a[i].innerText();
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].css({'display':''});
            } else {
            a[i].css({'visibility':'hidden'});
            }
        }
    })*/

    /*onkeyup="filterFunction()"*/