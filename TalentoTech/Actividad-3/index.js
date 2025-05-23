// Paso 1: Declaración de variables
let num1;
let num2;
let operacion;

// Paso 2: Función para realizar operaciones
function realizarOperacion(num1, num2, operacion) {
  if (operacion === "suma") {
    return num1 + num2;
  } else if (operacion === "resta") {
    return num1 - num2;
  } else if (operacion === "multiplicacion") {
    return num1 * num2;
  } else if (operacion === "division") {
    // Paso 3: Validación para evitar división por cero
    if (num2 === 0) {
      return "Error: no se puede dividir entre cero.";
    }
    return num1 / num2;
  } else {
    // Validación de operación no válida
    return "Error: operación no válida. Intente con suma, resta, multiplicacion o division.";
  }
}

// Paso 4: Bucle para múltiples operaciones
while (true) {
  operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division) o 'salir' para terminar:");

  if (operacion === "salir") {
    alert("¡Gracias por usar la calculadora! Hasta luego.");
    break;
  }

  // Entrada de números
  num1 = parseFloat(prompt("Ingrese el primer número:"));
  num2 = parseFloat(prompt("Ingrese el segundo número:"));

  // Validación de entradas
  if (isNaN(num1) || isNaN(num2)) {
    alert("Error: debe ingresar números válidos.");
    continue;
  }

  // Ejecutar operación y mostrar resultado
  let resultado = realizarOperacion(num1, num2, operacion);
  alert(`Resultado: ${resultado}`);
}
