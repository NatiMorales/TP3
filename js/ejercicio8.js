/*
Ejercicio 1A: Encontrar el número mayor en un arreglo:: Escribe una función que tome 
un arreglo de números como argumento y devuelva el número más grande en el arreglo.
*/

function encontrarNumeroMayor(arrayNumeros){
    let mayor=0;

    for(let i=0; i<arrayNumeros.length; i++){
        if(arrayNumeros[i] > mayor){
            mayor = arrayNumeros[i];
        }
    }

    return mayor;
}

const numeros = [];

do{
    let numero = parseInt(prompt("Ingrese un número"));
    numeros.push(numero);

}while(confirm("¿Desea ingresar más números?"));

document.write("El número mayor del array es: " + encontrarNumeroMayor(numeros));