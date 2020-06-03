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
  ".article__description--js",
  "Ten paragraf został stworzony za pomocą funkcji w javascript."
);

createContent(
  ".article__header--js",
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

const deathStar = {
  diameter: 120000,
  fire: (target) => {
    console.log(`${target} destroyed`);
  },
  isOperating: true,
  levels: 357,
  name: "Death Star",
  population: 10000,
  commander: {
    name: "Darth Vader",
    age: 45,
  },
};

console.log(deathStar);
console.log(deathStar.commander.name);
console.log(typeof console);

deathStar.fire("Millenium Falcon");

console.log(deathStar["diameter"]);

const showMeProperty = (myProperty) => {
  console.log(`Twoja własność ${myProperty} to ${deathStar[myProperty]}`);
};
showMeProperty("levels");
showMeProperty("nieistnieje");

//immutability w obiektach

const human1 = {
  name: "Maciek",
  age: 32,
};

const human2 = {
  name: "Stefan",
  age: 32,
};

human2.age = 35;
console.log(human2);
// udało się, zmieniliśmy age humanTwo. Dlaczego? Własności obiektu nie są zdefiniowane
// jako const. Mogą być przepinane na inne wartości. (mutowanie obiektów (własności obiektów)).

const human3 = human1;
console.log(human1);
console.log(human3);
//  human3 ma wskazywać na to samo, na co wskazuje human1, a human1 wskazuje na obiekt.
// nie tworzymy drugiego obiektu, który ma te same własności, tylko podpinamy się pod ten sam obiekt

human3.age = 35;
console.log(human1);
console.log(human3);
// ponieważ przypisaliśmy human1 i human3 do tego samego obiektu, zmieniamy age na 35 i zmienia
// się on dla human1 i human3, nawet jeśli zmieniliśmy to przy pomocy wartości dla human3.

const human4 = {
  name: "Michał",
  age: human1.age,
};
console.log(human4);
// age zostanie wpięty bezpośrednio pod wartość 32, ponieważ wpisując age: human1.age, odpytujemy,
// co się znajduje pod human1.age a on nam zwraca nie własność, tylko połączenie, na które ta

// co się stanie jak zmienimy wiek human5 na 40?

const human5 = {
  name: "Maciek",
  age: 32,
};

const human6 = {
  name: "Stefan",
  age: human5.age,
};

console.log(human5);
console.log(human6);

human5.age = 40;

console.log(human5);
console.log(human6);

//wiek human 6 nie zmienił się, bo edytowaliśmy połączenie human5.age, połączenie human6.age zostało na swoim miejscu.

const human7 = {
  name: "Maciek",
  age: 32,
  adress: {
    street: "Lipowa",
    city: "Białystok",
  },
};

const human8 = {
  name: "Stefan",
  age: 35,
  adress: human7.adress,
};

console.log(human7);
console.log(human8);

//po zmianie nazwy ulicy z warszawskiej na Lipową dla human 7 zmieniła się ona dla  human 7 i human8. Dzieje się tak, 
//bo adres human 8 wskazywał na obiekt adress, gdzie dopiero zmienilismy własność street z Warszawska na Lipowa.

const human9 = {
  name: "Maciek",
  age: 32,
  adress: {
    street: "Warszawska",
    city: "Białystok",
  },
};

const human10 = {
  name: "Stefan",
  age: 35,
  adress: {
    street: human9.adress.street,
    city: 'Białystok',
  }
};

console.log(human9);
console.log(human10);

// tutaj stworzyliśmy nowy obiekt (human10.adress), gdzie nazwa ulicy ma wskazywać na to samo, na co wskazuje
//nazwa human9.adress.street. 

human9.adress.street = "Lipowa";

console.log(human9);
console.log(human10);

//Po zmianie adresu na lipowa w pierwszym adresie powiązanie między drugim adresem a lipową nie zmieni się. 

