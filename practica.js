document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("yo soy danny");

document.write("<h2 id='textobotonClick' style='color:red;'>Boton para hacer click</h2>");


let edad = parseInt(prompt("Ingresa tu edad:"));


let residuo = edad % 5;

let añosFaltantes = residuo === 0 ? 0 : 5 - residuo;

if (añosFaltantes === 0) {
  alert("Tu edad ya es un múltiplo de 5.");
} else {
  alert(`Faltan ${añosFaltantes} años para que tu edad sea un múltiplo de 5.`);
}
