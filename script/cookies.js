
let u_name = document.getElementById("uname");
let p_word = document.getElementById("pword");
let f_name = document.getElementById("fname");
let e_mail = document.getElementById("email");
let f_ecnac = document.getElementById("fecnac");
let f_perfil = document.getElementById("fperfil");

let nu_name = document.getElementById("nuname");
let np_word = document.getElementById("npword");
let nf_name = document.getElementById("nfname");
let ne_mail = document.getElementById("nemail");
let nf_ecnac = document.getElementById("nfecnac");
let nf_perfil = document.getElementById("nfperfil");

/* Comprobación de cookies */

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

function checkCookie(e) {
  let user = getCookie(u_name.value + "_username");
  let email = getCookie(u_name.value + "_email");
  if (user == u_name.value || email == e_mail.value) {
    alert("Esta cuenta ya existe.\nInicia Sesión " + u_name.value);
  } 
  else {
    setCookie(u_name.value + "_username", u_name.value, 30);
    setCookie(u_name.value + "_password", p_word.value, 30);
    setCookie(u_name.value + "_fullname", f_name.value, 30);
    setCookie(u_name.value + "_email", e_mail.value, 30);
    setCookie(u_name.value + "_birthdate", f_ecnac.value, 30);
    setCookie(u_name.value + "_photo", f_perfil.value, 30);
    alert("Te has registrado correctamente. \nInicia Sesión " + u_name.value);
  }
  e.preventDefault();
  window.open("index.html", "_self");
  return false;
}

function checkCookie_ini(e) {
  let u_name1 = document.getElementById("uname1");
  let p_word1 = document.getElementById("pword1");
  let user1 = getCookie(u_name1.value + "_username");
  let psword = getCookie(u_name1.value + "_password");
  if (user1 == u_name1.value && psword == p_word1.value) {
    alert("Welcome again " + u_name1.value);
    sessionStorage.setItem("u_name1", u_name1.value);
    e.preventDefault();
    window.open("Sesion_abierta.html", "_self");
    return false;
    /*window.location.href="Sesion_abierta.html"*/
  } 
  else {
    alert("Usuario o contraseña incorrecto");
    e.preventDefault();
    window.open("index.html", "_self");
    return false;
  }
}

window.scook = function muestraCookie(cname,pn) {
  let u_name1 = sessionStorage.getItem("u_name1");
  let value = getCookie(u_name1 + cname);
  document.getElementById(pn).innerText=value;
}

function modifyCookie() {
  let u_name1 = sessionStorage.getItem("u_name1");
  let tpvalue = getCookie(u_name1 + "_password");
  let tfnvalue = getCookie(u_name1 + "_fullname");
  let tevalue = getCookie(u_name1 + "_email");
  let tbdvalue = getCookie(u_name1 + "_birthdate");
  let tphvalue = getCookie(u_name1 + "_photo");
  
  /* Si cambia el nombre de perfil, sustituimos las cookies por las nuevs con el nuevo nombre */
  if (nu_name.value != "") {
    setCookie(nu_name.value + "_username", nu_name.value, 30);
    if (np_word.value != ""){
      setCookie(nu_name.value + "_password", np_word.value, 30);
    }else {
      setCookie(nu_name.value + "_password", tpvalue, 30);
    };
    if (nf_name.value != ""){
      setCookie(nu_name.value + "_fullname", nf_name.value, 30);
    }else{
      setCookie(nu_name.value + "_fullname", tfnvalue, 30);
    };
    if (ne_mail.value != ""){
      setCookie(nu_name.value + "_email", ne_mail.value, 30);
    }else{
      setCookie(nu_name.value + "_email", tevalue, 30);
    };
    if (nf_ecnac.value != ""){
      setCookie(nu_name.value + "_birthdate", nf_ecnac.value, 30);
    }else{
      setCookie(nu_name.value + "_birthdate", tbdvalue, 30);
    };
    if (nf_perfil.value != ""){
      setCookie(nu_name.value + "_photo", nf_perfil.value, 30);
    }else{
      setCookie(nu_name.value + "_photo", tphvalue, 30);
    };
    setCookie(u_name1 + "_username", u_name1, -1);
    setCookie(u_name1 + "_password", tpvalue, -1);
    setCookie(u_name1 + "_fullname", tfnvalue, -1);
    setCookie(u_name1 + "_email", tevalue, -1);
    setCookie(u_name1 + "_birthdate", tbdvalue, -1);
    setCookie(u_name1 + "_photo", tphvalue, -1);
    sessionStorage.setItem("u_name1", nu_name.value);
  }else{
  if (np_word.value != "") {
      setCookie(u_name1 + "_password", np_word.value, 30)};
  if (nf_name.value != "") {
      setCookie(u_name1 + "_fullname", nf_name.value, 30)};
  if (ne_mail.value != "") {
      setCookie(u_name1 + "_email", ne_mail.value, 30)};
  if (nf_ecnac.value != "") {
      setCookie(u_name1 + "_birthdate", nf_ecnac.value, 30)};
  if (nf_perfil.value != "") {
      setCookie(u_name1 + "_photo", nf_perfil.value, 30)};
  }  

  e.preventDefault();
  window.open("Sesion_abierta.html", "_self");
  return false;
};