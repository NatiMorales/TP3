function calcularPerimetro(ladoA, ladoB){
    let perimetro = 2 * (ladoA + ladoB);
    return perimetro;
}

let lado1 = parseInt(prompt("Ingrese el tamaño del primer lado: "));
let lado2 = parseInt(prompt("Ingrese el tamaño del segundo lado: "));


document.write("El perimetro del rectángulo es: " + calcularPerimetro(lado1,lado2));