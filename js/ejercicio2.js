let ciudades = [];

do{
    let ciudad = prompt("Ingrese una ciudad");
    console.log(ciudad.length);
    if(ciudad.length > 0){
        ciudades.push(ciudad);
    }

}while(confirm("¿Desea seguir ingresando ciudades?"));


document.write(`El arreglo de ciudades tiene ${ciudades.length} elementos`);
document.write("<ul>");
document.write(`<li>Elemento 1ra posición: ${ciudades[0]}</li>`);
document.write(`<li>Elemento 3ra posición: ${ciudades[2]}</li>`);
document.write(`<li>Elemento ultima posición: ${ciudades[ciudades.length-1]}</li>`);
document.write("<br>");

ciudades.push("París");
document.write(`<li>Elemento ultima posición: ${ciudades[ciudades.length-1]}</li>`);
document.write("<br>");

document.write(`<li>Elemento 2da posición: ${ciudades[1]}</li>`);
document.write("<br>");

ciudades.splice(1,0,"Barcelona");
document.write(`<li>Elemento 2da posición: ${ciudades[1]}</li>`);
document.write("<br>");


document.write("</ul>");

document.write("<h1>Arreglo de Ciudades</h1>");
document.write("<ul>");

for(let i=0; i<ciudades.length; i++){
    document.write(`<li> Elemento: ${ciudades[i]}</li>`);
}

document.write("</ul>");

