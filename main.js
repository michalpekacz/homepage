// pobieramy hamburgera za pomocą queryselectora
const hamburger = document.querySelector(".hamburger--js");
//do hamburgera wpinamy eventlistenera pod kliknięcie, który wywoła funkcje:
//1.za pomocą queryselectora wybierze blok z nawigacją
//2.za pomocą toggle zmieni jej klasę
hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".navigation--js");
  nav.classList.toggle("navigation--open");
});
