// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Lista para almacenar los nombres de los amigos
let listaAmigos = [];

// Función para añadir un nombre a la lista
function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  listaAmigos.push(nombre); // Agrega el nombre a la lista
  actualizarLista(); // Actualiza la lista visible en la página
  input.value = ""; // Limpia el campo de entrada
}

// Función para actualizar la lista visual en la página
function actualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpia la lista actual

  listaAmigos.forEach((nombre) => {
    let li = document.createElement("li");
    li.textContent = nombre; // Crea un nuevo elemento de lista
    lista.appendChild(li); // Añade el elemento a la lista visible
  });
}

// Función para realizar el sorteo aleatorio
function sortearAmigo() {
  if (listaAmigos.length === 0) {
    alert("La lista está vacía. ¡Añade algunos nombres primero!");
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
  let nombreSorteado = listaAmigos[indiceAleatorio];

  // Muestra el resultado en la página
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>El amigo secreto es: <strong>${nombreSorteado}</strong></li>`;
}

// Función para reiniciar el juego
function reiniciarJuego() {
    listaAmigos.length = 0; // Vacía la lista de nombres
    actualizarLista(); // Limpia la lista visible en la página
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpia el resultado del sorteo
  }