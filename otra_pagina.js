// Obtener los parámetros de la URL (nota obtenida)
const urlParams = new URLSearchParams(window.location.search);
const nota = parseFloat(urlParams.get('nota'));

//const resultInput = document.getElementById('result');

// Seleccionar los elementos HTML
const notaElement = document.getElementById('nota');
const diferenciaElement = document.getElementById('diferencia');
const volverBtn = document.getElementById('volverBtn');

// Mostrar la nota obtenida
notaElement.textContent = nota.toFixed(2);

// Calcular la diferencia entre 10.5 y la nota
const diferencia = (10.5 - nota).toFixed(2);
diferenciaElement.textContent = diferencia;

// Agregar funcionalidad al botón para volver a la calculadora
volverBtn.addEventListener('click', () => {
  window.location.href = 'subpagina.html'; // Cambia a la ruta de tu calculadora
});
