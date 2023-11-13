const sumas = [];

for (let i = 0; i < 50; i++) {
    const dado1 = Math.ceil(Math.random() * 6);
    const dado2 = Math.ceil(Math.random() * 6);
    let suma = dado1 + dado2;
    sumas.push(suma);
}

document.write(`<table><tr><td>Suma</td>`);
document.write(`<td>Apariciones</td></tr>`);

for(let i=2; i<=12; i++){
    let contador=0;
    document.write("<tr>");
    for(let j=0; j<sumas.length; j++){
        if(i === sumas[j]){
            contador++
        }
    }
    document.write(`<td>${i}</td>`);
    document.write(`<td>${contador}</td>`);
}
document.write("</table>");

console.log(sumas);
