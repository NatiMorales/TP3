function mostrarInformacionCadena(cadena){
    if(cadena === cadena.toUpperCase()){
        document.write("La cadena esta formada solo por letras mayúsculas.");
    } else if(cadena === cadena.toLowerCase()){
        document.write("La cadena esta formada solo por letras minúsculas.");
    } else {
        document.write("La cadena esta formada por letras mayúsculas y minúsculas.");
    }
}

let cadena = prompt("Ingrese una cadena: ");
mostrarInformacionCadena(cadena);