const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
                "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

document.write("<h1>Lista de Meses</h1>")
document.write("<ul>");

for(let i=0; i<12; i++){
    document.write("<li>");
    document.write(meses[i]);
    document.write("</li>");
}

document.write("</ul>");