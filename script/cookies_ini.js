/* Inicio Sesión */

let u_name1 = document.getElementById("uname1");
let p_word1 = document.getElementById("pword1");

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

function checkCookie_ini() {
  let user1 = getCookie("username");
  alert(document.cookie);
  let psword = getCookie("password");
  if (user1 == u_name1.value && psword == p_word1.value) {
    alert("Welcome again " + user1);
  } 
  else {
     alert("Usuario o contraseña incorrecto")
  }
}
