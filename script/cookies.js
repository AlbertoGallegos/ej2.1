let u_name = document.getElementById("uname");
let p_word = document.getElementById("pword");
let f_name = document.getElementById("fname");
let e_mail = document.getElementById("email");
let f_ecnac = document.getElementById("fecnac");
let f_perfil = document.getElementById("fperfil");

function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

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

function checkCookie() {
  let user = getCookie("username");
  if (user == u_name.value) {
    alert("Welcome again " + user);
  } else {
     user = u_name.value;
     
     if (user != "" && user != null) {
       setCookie("username", user, 30);
       setCookie("password", p_word.value, 30);
       setCookie("fullname", f_name.value, 30);
       setCookie("email", e_mail.value, 30);
       setCookie("birthdate", f_ecnac.value, 30);
       setCookie("photo", f_perfil.value, 30);
     }
  }
}
