var tabla=document.getElementById("tabla");
var numero=Math.floor(Math.random(20,5) * 10 +1);

function crearFondo(elemento,n,n1,n2){
    elemento.style.backgroundColor="rgb("+Math.floor(Math.random() * 255 +1)+","+Math.floor(Math.random() * 255 +1)+","+Math.floor(Math.random() * 255 +1)+")";
}

function crearTabla(ntr,ntd){  
    for (x=0;x<ntr;x++){

        var columna=document.createElement("tr");

        for (n=0;n<ntd;n++){
            var celda=document.createElement("td");
            celda.innerHTML='&nbsp';
            crearFondo(celda);
            columna.appendChild(celda);
        }
    tabla.appendChild(columna);
    }
}

setTimeout(() => {
    document.getElementById("anuncio").style.display="none";    
    setInterval(() => {
        crearTabla(numero,numero);
    }, 2000);
    setInterval(() => {
        tabla.innerHTML="";
    }, 5000);
}, 3000);