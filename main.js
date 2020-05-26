const firstName = 'Michał';
const age = 32;

console.log(firstName);
console.log(age);
console.log(`Cześć! Nazywam się ${firstName} i mam ${32} lata`);

//kod pobiera element
const heading = document.querySelector(".main-heading--js");

console.log(heading);

//wypisuje wartość
console.log(heading.innerHTML); 

//zmiana połączenia do innej wartości
heading.innerHTML = `Cześć! Nazywam się ${firstName} i mam ${32} lata`

console.log(heading);

//wypisuje już nową wartość
console.log(heading.innerHTML);


const heading2 = document.getElementsByClassName('.navigation');
console.log(heading2);

