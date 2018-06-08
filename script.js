document.addEventListener("DOMContentLoaded", function() {
  var url = window.location.toString();
  var font = url.substring(url.indexOf("&") + 1);
  var text = url.substring(url.indexOf("?") + 1).replace("&" + font, "");
  var background = url.substring(url.indexOf("#")).replace("?" + text, "").replace("&" + font, "");
  
  while (text.includes("%20"))text = text.replace("%20", " ");
  
  if (url.includes("?"))
    document.title = text,
    document.documentElement.style.setProperty("--text", "'" + text + "'");
  
  if (background.length == 4 || background.length == 7)
    document.documentElement.style.setProperty("--background", background);
    
  if (font == "black" || font == "white")
    document.documentElement.style.setProperty("--font", font);
    
  if (url.includes("?") || url.includes("#") || url.includes("&"))
    document.querySelector("a").remove();
});
