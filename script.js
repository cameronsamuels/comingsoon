var url = window.location.toString();
var text = url.substring(url.indexOf("?") + 1);
var background = url.substring(url.indexOf("#")).replace("?" + text, "");

if (url.includes("?"))
  document.title = text,
  document.documentElement.style.setProperty("--text", "'" + text + "'");

if (background.length == 4 || background.length == 7)
  document.documentElement.style.setProperty("--background", background);
