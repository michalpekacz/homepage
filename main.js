const firstName = "Michał";
const age = 32;

console.log(firstName);
console.log(age);
console.log(`Cześć! Nazywam się ${firstName} i mam ${32} lata`);

const emptyHeading = document.querySelector(".main-header__heading--js");
emptyHeading.innerHTML = `Ten napis został stworzony za pomocą javascriptu`;

function calculate(myNumber) {
  return `wynik ${myNumber * 7}`;
}

const myResult = calculate(age);

console.log(myResult);

console.log(age);

function greet(age, firstName) {
  console.log(`Cześć! Nazywam się ${firstName} i mam ${age} lata`);
}

greet(23, "Tomek");

function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}

createContent(
  ".section__description--js",
  "Ten paragraf został stworzony za pomocą funkcji w javascript."
);

createContent(
  ".section__article-header--js",
  "Funkcja wypełniająca content treścią. Nagłówek javascript."
);

function helloWorld() {
  console.log("HelloWorld");
}

helloWorld();

const greetArrow = (age, firstName) => {
  console.log(`Cześć! Nazywam się ${firstName} i mam ${age} lata`);
};
greetArrow(age, firstName);

const calculateArrow = (myNewNumber) => myNewNumber * 7;
const myResultArrow = calculateArrow(6);
console.log(myResultArrow);

//możemy to też zapisać inaczej
const calculateArrow2 = (myNewNumber) => myNewNumber * 7;
console.log(calculateArrow(8));
