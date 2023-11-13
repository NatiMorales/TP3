function mostrarTablaDeMultiplicar(numero){
    for(let i = 1; i<=10; i++){
        document.write(`${i} * ${numero} = ${i*numero} <br>`);
    }
}

let numero = parseInt(prompt("Ingrese un número:"));
mostrarTablaDeMultiplicar(numero);