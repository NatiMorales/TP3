/*
Ejercicio 4A: Generar números primos: Escribe una función que tome un 
número entero como argumento y devuelva un arreglo de todos los números 
primos menores o iguales a ese número.
*/

function mostrarNumerosPrimos(numero){
    const numerosPrimos = [];
    
    for(let i=1; i<=numero; i++){
        let contador = 0;
        for(let j=2; j<i; j++){
            if((i % j) === 0){
                contador++;
            }
        }

        if(contador === 0){
            numerosPrimos.push(i);
        }
    }

    return numerosPrimos;

}

let numero = parseInt(prompt("Ingrese un número"));
document.write(`Números primos de ${numero}: ${mostrarNumerosPrimos(numero)}`);