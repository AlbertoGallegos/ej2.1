$(document).ready(function(){
    $("#maincuenta").hide();
    u_name1 = sessionStorage.getItem("u_name1");
    
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
    
    $("#user").html(u_name1);


    $("#bt_cuenta").click(function(){
        $("#barra_musica").hide();
        $(".links").css({'bottom' : '20px'});
        $("#barra_musica").html("");
        $("#main1").hide();
        $("#crearlista_main").hide();
        $("#main_perfil").hide();
        $("#main_listas").hide();
        $("#maincuenta").show();
        window.parent.scook('_username','p1');
        window.parent.scook('_password','p2');
        window.parent.scook('_fullname','p3');
        window.parent.scook('_email','p4');
        window.parent.scook('_birthdate','p5');
        /*muestraCookieimg('photo','p6');*/
    });

    $("#bt_main").click(function(){
        $("#main1").show();
        $("#maincuenta").hide();
        $("#main_perfil").hide();
        $("#main_listas").hide();
        $("#crearlista_main").hide();
    });
    
    $("#bt_inicio").click(function(){
        $("#main1").show();
        $("#maincuenta").hide();
        $("#main_perfil").hide();
        $("#main_listas").hide();
        $("#crearlista_main").hide();
    });

});


