const firstName = "Michał";
const age = 32;

console.log(firstName);
console.log(age);
console.log(`Cześć! Nazywam się ${firstName} i mam ${32} lata`);

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
    city: "Białystok",
  },
};

console.log(human9);
console.log(human10);

// tutaj stworzyliśmy nowy obiekt (human10.adress), gdzie nazwa ulicy ma wskazywać na to samo, na co wskazuje
//nazwa human9.adress.street.

human9.adress.street = "Lipowa";

console.log(human9);
console.log(human10);

//Po zmianie adresu na lipowa w pierwszym adresie powiązanie między drugim adresem a lipową nie zmieni się.

// Logika w JS:
const human11 = {
  age: 32,
};
const human12 = {
  age: 32,
};
//podobnie jak w funkcjach musimy otworzyć blok kodu, będzie się on wykonywał tylko jeśli wyrażenie w nawiasach jest prawdą.
if ("Java" != "JavaScript") {
  console.log("Java to Javascript");
}
//jeśli wpiszemy nic nie wyskoczy, bo całe wyrażenie jest nieprawdą i blok kodu się nie wykona
if ("Java" != "Java") {
  console.log("Java to Javascript");
}

//przykałdy 2=2
if (2 == "2") {
  console.log("porównanie 1 przykład");
}
//tutaj są dwie różne wartości (2 typy danych)
if (2 === "2") {
  console.log("porównanie 2 przykład");
}

console.log(typeof 2);
console.log(typeof "2");
//tutaj też nie wypisze bo JS nie sprawdza typów danych
if (2 != "2") {
  console.log("porównanie 3 przykład");
}
//tutaj wypisze
if (2 !== "2") {
  console.log("porównanie 4 przykład");
}
//możemy porównywać też zmienne i obiekty:
if (human11.age >= human12.age) {
  console.log("human 1 jest starszy bądź ma tyle samo lat co human2");
}
//false
if (false) {
  console.log("to sie nie wykona");
}
if (0) {
  console.log("to sie nie wykona2");
}
if ("") {
  console.log("to sie nie wykona3");
}
if ("0") {
  console.log("wykona się czy się nie wykona");
}
if (human11.age) {
  console.log("wykona się");
}
//złożone warunki (tutaj sprawdzi czy human2.name istnieje):
if (human11.age === 32 && human2.name) {
  console.log("wykona się 2");
}
//jeśli wpiszemy coś co nie istnieje nie wykona się bo np human2.pet jest undefined.
if (human11.age === 32 || human2.pet) {
  console.log("OR zadziała czy nie");
}
//! NOT
if (!false) {
  console.log("to sie NOT wykona");
}

if (!("Java" == "JavaScript")) {
  console.log("! zadziałał");
}

//else jeśli warunek logiczny if jest spełniony to będzie się wykonywał blok kodu 1, jeśli warunek nie jest
//spełniony to wykona się blok kodu po else.
if (human11.age > human12.age) {
  console.log("human1 jest starszy");
} else {
  console.log("human2 jest starszy bądź ma tyle samo lat");
}
//else if
if (human1.age > human2.age) {
  console.log("human1 jest starszy");
} else if (human1.age < human2.age) {
  console.log("human2 jest starszy");
} else if (human1.age == human2.age) {
  console.log("human1 i human 2 są równolatkami");
}

// switch, używamy głównie, jeśli znamy dokładne wartości jakie może osiągnąć nasza zmienna
// i na bazie tych wartości działamy, taką samą funkcję możemy skonstruować przy pomocy if.

const myNumber = 12;

console.log(myNumber);

switch (myNumber) {
  case 7:
    console.log("jestem siódemką");
    break;
  case 9:
    console.log("jestem dziewiątką");
    break;
  default:
    console.log("jestem czymś innym");
}

//zapis skrócony, oba zapisy są równoważne
32 > 20 ? console.log("to prawda") : console.log("to nieprawda");

if (32 < 20) {
  console.log("to prawda");
} else {
  console.log("to nieprawda");
}
//wynik operacji logicznych możemy zwracać do zmiennej

const result = 32 > 20 ? console.log("to prawda") : console.log("to nieprawda");

console.log(result);
//dostałem undefined, bo nie zdefiniowaliśmy returna, console log nie jest returnem
//w tym przypadku nie musimy podawac returna, on jest domyślny, nie musi to być
//true/false, może być dowolny typ prosty lub obiekty. Możemy tu wrzucić dowolną wartość
//jeśli będzie true i dowolną wartość jeśli będzie false.

const result2 = 32 < 20 ? true : false;

console.log(result2);

const result3 = 32 > 20 ? { deathStar } : false;

console.log(result3);

const button = document.querySelector(".action--js");

console.log(button);

// addEventListener ma dwa parametry, może mieć ich więcej. Type jest np wydarzeniem
// związanym z myszką (mouse events) typ wpisujemy jako string, drugim parametrem jest
// nazwa funkcji (nie wywołujemy jej, podajemy tylko nazwę).

const myClick = () => {
  const heading = document.querySelector(".main-header__heading--js");
  heading.innerHTML = `Ten napis został stworzony za pomocą javascriptu`;
};

button.addEventListener("mouseenter", myClick);

//f strzałkowa z e (e to event) w środku, dostaniemy mouse event,

const button2 = document.querySelector(".action--js2");

button2.addEventListener("click", (e) => {
  console.log(e);
});

//f strzałkowa do zmiany nagłówka

const button3 = document.querySelector(".action--js3");

button3.addEventListener("click", () => {
  const heading = document.querySelector(".main-header__heading--js");
  heading.innerHTML = `Ten napis został stworzony za pomocą javascriptu`;
  heading.classList.toggle('klasa-z-js');
  console.log(heading.classList.contains('main-header__heading'));
});
