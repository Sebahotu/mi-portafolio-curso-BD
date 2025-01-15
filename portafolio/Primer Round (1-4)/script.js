//Roud 1

//1
console.log("¡Hola, mundo!");

//2
let nombre = "Sebastian";
console.log(nombre);  

//3
let num1 = 5;  
let num2 = 3;  
let suma = num1 + num2;
console.log("La suma es:", suma);  

//4
let saludo = "Hola";  
let nombre_2 = "Juan";  
console.log(saludo + ", " + nombre_2 + "!"); 

//Round 2

//5
let edad = prompt("¿Cuál es tu edad?");  
if (edad >= 18) { // Aquí se verifica si la edad es mayor o igual a 18  
    console.log("Eres mayor de edad.");  
} else {  
    console.log("Eres menor de edad."); // Mensaje para cuando la persona es menor de 18  
}  

//6
let base = parseFloat(prompt("Ingresa la base del triángulo:")); // Convertir entrada a número  
let altura = parseFloat(prompt("Ingresa la altura del triángulo:")); // Convertir entrada a número  

// Calcular el área  
let area = (base * altura) / 2;  

// Mostrar el resultado  
console.log("El área del triángulo es:", area);  

//7
let numero = prompt("Ingresa un número:"); // Convertir la entrada a un número entero  
if (numero % 2 === 0) { // Verificar si el resto de la división por 2 es igual a 0  
    console.log("El número es par.");  
} else {  
    console.log("El número es impar."); // Mensaje para el caso de que el número sea impar  
}  


//Final Round

//8
for (let i = 1; i <= 10; i++) {  
    console.log(i); // Imprime el número actual  
} 

//9
let numeros = [1, 2, 3, 4, 5];  
let suma2 = 0;  
for (let i = 0; i < numeros.length; i++) { // Recorre el array mientras 'i' sea menor que la longitud del array  
    suma2 += numeros[i]; // Suma el elemento actual del array a la variable suma  
}  
console.log("La suma es:", suma2); // Muestra la suma total  

//10
