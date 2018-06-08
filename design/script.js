document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("input[type='button']").addEventListener("click", function() {
    var text = "?" + document.querySelector("input").value.replace(/ /g, "%20");
    var background = "#" + document.querySelectorAll("input")[1].value;
    var font = "&" + (document.querySelector(".jscolor").style.color == "rgb(0, 0, 0)" ? "black" : "white");
    window.open("https://cameronsamuels.com/placeholder/" + background + (text.length == 1 ? "" : text) + font);
  });
});
