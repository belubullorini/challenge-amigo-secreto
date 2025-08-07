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

mostrarListaAmigos(); 
  console.log("Lista de amigos:", amigos);
}

function mostrarListaAmigos() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; 

  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += `<li>${amigos[i]}</li>`;
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  const nombreSorteado = amigos[indiceAleatorio];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>${nombreSorteado} ha sido sorteado 🎉</li>`;
}