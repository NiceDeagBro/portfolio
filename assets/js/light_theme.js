var themeSwitch = document.getElementById("theme-switch");
var logo = document.getElementById("logo");
var github = document.getElementById("github");
var linkedin = document.getElementById("linkedin");

themeSwitch.onclick = function(){
  document.body.classList.toggle("light-theme");
  document.body.classList.toggle("icon-color")
  if(document.body.classList.contains("light-theme")){
    themeSwitch.src = "assets/img/dark.png";
    logo.src = "assets/img/logo.png";
  }else{
    themeSwitch.src = "assets/img/light.png";
    logo.src = "assets/img/logo-light.png";
  }
}