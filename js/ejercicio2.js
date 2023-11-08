let ciudades = [];

do{
    let ciudad = prompt("Ingrese una ciudad");
    ciudades.push(ciudad);

}while(confirm("¿Desea seguir ingresando ciudades?"));

document.write("<h1>Lista de Ciudades</h1>");
document.write("<ul></ul>");

for(let i=0; i<ciudades.length; i++){
    document.write(`<li>${ciudades[i]}</li>`);
}

document.write("<ul></ul>");