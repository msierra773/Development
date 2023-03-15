var homeButton = document.getElementById("home");
var shopButton = document.getElementById("shop");
var contactButton = document.getElementById("contact");
var aboutUsButton = document.getElementById("aboutUs");
var categoriesButton = document.getElementById("categories");

homeButton.addEventListener("click", () => {
  window.location.href = "index.html";
});
shopButton.addEventListener("click", () => {
  window.location.href = "shop.html";
});
contactButton.addEventListener("click", () => {
  window.location.href = "contact.html";
});
aboutUsButton.addEventListener("click", () => {
  window.location.href = "aboutUs.html";
});
categoriesButton.addEventListener("click", () => {
  window.location.href = "categories.html";
});
