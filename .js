function calcularSuma() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const suma = num1 + num2;
    console.log("La suma es: ", suma);
  }
    document.addEventListener("DOMContentLoaded", function() {
        const botonCalcular = document.getElementById("calcular");
      
        if (botonCalcular) {
          botonCalcular.addEventListener("click", function() {
            const num1 = parseFloat(document.getElementById("num1").value);
            const num2 = parseFloat(document.getElementById("num2").value);
            const suma = num1 + num2;
            console.log("La suma es: ", suma);
          });
        } else {
          console.log("No se encontró el botón.");
        }
      });
      
  