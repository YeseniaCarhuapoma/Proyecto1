document.getElementById("boton").addEventListener("click", guardarNombre)

function guardarNombre() {
  let  nombreUsuario = document.getElementById("nombre").value;
    localStorage.setItem("name", nombreUsuario);
}