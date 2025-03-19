let amigos = []; // Array para almacenar los amigos

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value; // Obtener el valor del input de HMTL

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido."); //si no hay nombre, mostrar alerta
        return;     
    }
    
    amigos.push(nombre); //Actualizamos el array con el nuevo nombre

    document.getElementById("amigo").value = ""; // Limpia el input

    actualizarListaAmigos(); //llamamos a la función para actualizar la lista de amigos
}

function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos"); // Obtener el elemento <ul> de HTML

    lista.innerHTML = ""; // Limpiar la lista

  
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`; // Agregar un <li> por cada amigo
    }
}

function sortearAmigo() {

    if(amigos.length <= 1) {
        alert("No hay suificentes amigos para jugar"); //si solo hay un amigo o ninguno, mostrar alerta
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);  // Generar un número aleatorio entre la cantidad de nombres en la lista

    let nombreAleatorio = document.getElementById("resultado").innerHTML = amigos[indiceAleatorio]; // Mostrar el nombre del amigo secreto en el HTML 
}