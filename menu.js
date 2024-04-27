var menuButton = document.getElementById("cabecalho__navegador__botao");
var menu = document.getElementById("cabecalho__navegador__navegador");

menuButton.addEventListener("click", function() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});