// Obtener referencias a los elementos HTML
const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const number3 = document.getElementById('number3');
const number4 = document.getElementById('number4');
const number5 = document.getElementById('number5');
const number6 = document.getElementById('number6');
const number7 = document.getElementById('number7');
const resultInput = document.getElementById('result');
const calculateButton = document.getElementById('calculateButton');


function isValidGrade(value) {
  return value >= 0 && value <= 20;
}

// Agregar un evento al botón "Calcular"
calculateButton.addEventListener('click', () => {
  // Convertir los valores de los inputs a números
  const value1 = parseFloat(number1.value) || 0;
  const value2 = parseFloat(number2.value) || 0; 
  const value3 = parseFloat(number3.value) || 0;
  const value4 = parseFloat(number4.value) || 0;
  const value5 = parseFloat(number5.value) || 0; 
  const value6 = parseFloat(number6.value) || 0;
  const value7 = parseFloat(number7.value) || 0;

  // Validar que todas las notas estén entre 0 y 20
  const grades = [value1, value2, value3, value4, value5, value6, value7];
  const isValid = grades.every(isValidGrade);

  if (!isValid) {
    alert(` Es de 0 a 20, por eso Jalas `);
    return;
  }


  

  // Validar que los valores sean números
  if (isNaN(value1) || isNaN(value2) || isNaN(value3) || isNaN(value4) || isNaN(value5) || isNaN(value6) || isNaN(value7)) {
    alert('Por favor, ingresa números válidos.');
    return;
  }

  // Realizar la operación matemática: Suma de los tres números
  const resultadoEC = (value1 + value2 + value4 + value5)/4;
  const resultado = ( resultadoEC*40 + value3*20 + value6*20 + value7*20)/100;
  
  // Mostrar el resultado en el campo de texto
  resultInput.value = resultado.toFixed(2); // Redondea a 2 decimales

    // Verificar si el resultado es menor que 10.5
    if (resultado < 10.5) {
      // Redirigir a otra página si el resultado es menor que 10.5
      window.location.href = 'otra_pagina.html';  // Aquí pones la URL de la página a la que deseas redirigir
    }

    if (resultado < 10.5) {
      window.location.href = `otra_pagina.html?nota=${resultado.toFixed(2)}`;
    }
    
});
