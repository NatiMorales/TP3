/*
Ejercicio 3A: Convertir grados Celsius a Fahrenheit: Escribe una función que 
tome una temperatura en grados Celsius como argumento y devuelva la temperatura 
equivalente en grados Fahrenheit.
*/

function convertirCelsiusAFahrenheit(gradosCelsius){
    let gradosFahrenheit = (gradosCelsius * (9/5)) + 32;
    return gradosFahrenheit;

}

let gradosCelsius = parseInt(prompt("Ingrese una temperatura en grados Celsius: "));
document.write("La temperatura en grados Fahrenheit es: " + convertirCelsiusAFahrenheit(gradosCelsius));