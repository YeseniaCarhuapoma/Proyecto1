var preguntas = [
  "¿En que departamento se encuentra Machu Picchu?",
  "¿En que departamento se encuentra la casa al revés de Guatavita?",
  "¿Donde se encuentra la laguna de siete colores?"
];
var opciones = [[
  "Cajamarca",
  "Huánuco",
  "Cuzco",
],
["Cartagena",
  "Valledupar",
  "Cundinamarca"],
["Huari",
  "Canta",
  "Huarochiri"]];
var puntajePorOpcion = [
  [0, 0, 5],
  [0, 0, 5],
  [0, 5, 0],
];
var puntaje = 0
var i = 0
function mostrarResultado() {
  // Se remueven los hijos del div con clase "card", dentro de él agregaremos los resultados
  var div = document.getElementsByClassName("turismo")[0];
  div.innerHTML = "";

  // Agregamos los elementos correspondientes a los resultados
  div.innerHTML += "<h3 class='resultado_titulo'>Resultados</h3>";
    if (puntaje ==15) {
      mensaje = "<span id='mensaje-EXCELENTE'>EXCELENTE</span>";
    } else if (puntaje == 10) {
      mensaje = "<span id='mensaje-BIEN'>BIEN</span>";
    } else if (puntaje == 5) {
      mensaje = "<span id='mensaje-PUEDES MEJORAR'>PUEDES MEJORAR</span>";
    } else if (puntaje == 0) {
      mensaje = "<span id='mensaje-INTÉNTALO DE NUEVO'>INTÉNTALO DE NUEVO</span>";
    }
    div.innerHTML += `<p>Tu puntaje es ${puntaje},${mensaje}</p>`
  div.innerHTML +="<a class='boton' href='index.html'>Nuevo usuario</a> <a class='boton' href='index2.html'>Jugar de nuevo</a>"
  }
  function actualizarPuntaje(opcion) {
    var indice = opcion - 1;
    puntaje += puntajePorOpcion[i][indice];

    i++
    if (i < preguntas.length) {

      siguientePregunta();
    } else {
      mostrarResultado();
    }}
    function siguientePregunta() {
      document.getElementById("pregunta").innerHTML = preguntas[i];
      document.getElementById("op1").innerHTML = opciones[i][0];
      document.getElementById("op2").innerHTML = opciones[i][1];
      document.getElementById("op3").innerHTML = opciones[i][2];
    }
    siguientePregunta();   // Muestra la primera pregunta

      document.getElementById("op1").addEventListener("click", function() {
        actualizarPuntaje(1);
      });
      document.getElementById("op2").addEventListener("click", function() {
        actualizarPuntaje(2);
      });
      document.getElementById("op3").addEventListener("click", function() {
        actualizarPuntaje(3);
      });
