let amigos = [];

function agregarAmigo() {

const input = document.getElementById("amigo");
const nombre = input.value.trim();

if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
}

amigos.push(nombre);

input.value = "";

console.log("Lista de amigos:", amigos);
}