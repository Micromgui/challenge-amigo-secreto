let listaAmigos=[];

function agregarAmigo() {
    let nombreIngresado=document.getElementById("amigo");
    let nombreAmigo=nombreIngresado.value;

    if (nombreAmigo === "") {
        alert("Ingresar un nombre.");
        return;
    }

    listaAmigos.push(nombreAmigo);
    nombreIngresado.value=""; // Limpiar el campo de texto
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    let lista=document.getElementById("listaAmigos");
    lista.innerHTML=""; // Limpiar la lista actual

    for (let i=0; i<listaAmigos.length; i++){
        let amigo=listaAmigos[i];
        let item=document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (listaAmigos.length===0) {
        alert("No se listaron amigos para sortear");
        return;
    }

    let indice=Math.floor(Math.random()*listaAmigos.length);
    let amigoSecreto=listaAmigos[indice];

    const resultado=document.getElementById("resultado");
    resultado.innerHTML= `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}