/*
Ejercicio 2A: Filtrar números pares en un arreglo: Escribe una función que tome un 
arreglo de números como argumento y devuelva un nuevo arreglo que contenga solo los 
números pares del arreglo original.
*/

function encontrarNumerosPares(arrayNumeros){
    const numerosPares = [];
    for(let  i=0; i<arrayNumeros.length; i++){
        if((arrayNumeros[i] % 2) === 0){
            numerosPares.push(arrayNumeros[i]);
        }
    }
    return numerosPares;
}

const numeros = [];
do{
    let numero = parseInt(prompt("Ingrese un número: "));
    numeros.push(numero);

}while(confirm("¿Desea ingresar más números?"));

document.write("Números pares: " + encontrarNumerosPares(numeros));