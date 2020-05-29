const firstName = 'Michał';
const age = 32;

console.log(firstName);
console.log(age);
console.log(`Cześć! Nazywam się ${firstName} i mam ${32} lata`);

const emptyHeading = document.querySelector('.main-header__heading--js');

emptyHeading.innerHTML = `Ten napis został stworzony za pomocą javascriptu`