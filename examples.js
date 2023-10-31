"use strict";
//Varibler, explicit
let firstName = 'Alice';
// Detta går ej för firstName ska vara i strängform
//firstName = 39
let year = 2023;
year = 2024;
//Array med typescript
//Om Array har förutbestämd datatyp så kan vi ej ändra detta
let persons = ['Richard', 'Hanna', 'Albin'];
//Kommer ej fungera
//persons.push(2);
//Om Array har förutbestämd datatyp så kan vi ej ändra detta men ett exempel med flera
let persons1 = ['Richard', 'Hanna', 'Albin', 28, false];
//Fungerar
persons1.push(2);
persons1[3] = true;
//En array med flera datatyper
let mixedArray = ['Richard', 78, 'Bananer', 900];
//Objekt med typescript
/* let product = {
    productName: 'Nike',
    price: 199
}

product.productName = 99
product.price = 99
 */
//Explicit typing
let age = 30;
function add(a, b) {
    return a + b;
}
//funktionens callback förväntar sig 2 värden och att datatyperna stämmer
add(7, 9);
//Explicit Casting, ändrar datatyp
let x = '42';
x = 5;
let y = Number(x);
//Explicit Declaration
/* let count: number;

function greet(name: string):void{
    console.log(`Hello, ${name}!`)
}
 */
//Det går ej att logga ut eller få returvärden från TS filer ut i webbläsaren
//då alla webbläsare arbetar med JS
console.log('Hej');
//# sourceMappingURL=examples.js.map