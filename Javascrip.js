// EJERCICIO 1 SUMA
const prompt = require('prompt-sync')();

let valor1 = prompt("Ingresa el primer valor: ");
let valor2 = prompt("Ingresa el segundo valor: ");

let valorsuma = Number(valor1);
let valorsuma2 = Number(valor2);
let suma = valorsuma + valorsuma2;

console.log("La suma es: " + suma);

// EJERCICIO 2 suma
let valor3 = prompt("Ingresa el primer valor: ");
let valor4 = prompt("Ingresa el segundo valor: ");

let valorsuma3 = Number(valor3);
let valorsuma4 = Number(valor4);
let suma1 = valorsuma3 + valorsuma4;
console.log("la suma es :" + suma1);

// EJERCICIO 3 PRECIO DE PRODUCTOS

let producto1 = prompt("INGRESA EL PRECIO DEL PRIMER PRODUCTO");
let producto2 = prompt("INGRESA EL PRECIO DEL SEGUNDO PRODUCTO");
 
let valorproduc = Number(producto1);
let valorproduc2 = Number(producto2);

let total = valorproduc + valorproduc2;
console.log(`Su total a pagar es : ${total} $`);

// EJERCICIO 4 SUMA DE EDADES

console.log("SUMAREMOS 2 EDADES");

let edad1 = prompt("Ingresa la edad del primero usuario");
let edad2 = prompt("Ingresa la edad del segundo usuario");
let sumaedad1 = Number(edad1);
let sumaedad2 = Number(edad2);

let sumaedad = sumaedad1 + sumaedad2
console.log(`La suma de edades en años es de: ${sumaedad} años`);

// EJERCICIO 5 SUMA DE NOTAS

let nota1 = prompt("Ingresa la primera nota del estudiante:");
let nota2 = prompt("Ingresa la segunda nota del estudiante:");

let numnota1 = Number(nota1);
let numnota2 = Number(nota2);

let sumanotas = numnota1 + numnota2;

console.log(`La suma de ambas notas es: ${sumanotas}`);

// EJERCICO 6 SUMA DE DOS GRUPOS

console.log("SUMAREMOS 2 GRUPOS");

let grupo1 = prompt("Ingresa la cantidad de estudiantes del primer grupo:");
let grupo2 = prompt("Ingresa la cantidad de estudiantes del segundo grupo:");

let numgrupo1 = Number(grupo1);
let numgrupo2 = Number(grupo2);

let totalestudiantes = numgrupo1 + numgrupo2;

console.log(`En total hay ${totalestudiantes} estudiantes.`);

// EJERCICIO 7 CANTIDAD DE DINERO

console.log("SUMAREMOS 2 cantidades de dinero");

let dinero = prompt("Ingresa una cantidad de dinero");
let dinero2 = prompt("Ingresa otra cantidad de dinero");
let numdinero = Number(dinero);
let numdinero2 = Number(dinero2);
let sumadinero = numdinero + numdinero2;
console.log(`La suma del dinero es: ${sumadinero} $`);



