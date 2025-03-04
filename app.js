// Ejercicio 1
// Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora del Desafío";

// Ejercicio 2
// Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
function mostrar (){
   console.log( "El botón fue clicado"); 
}
mostrar();

// Ejercicio 3
// Crea una función que se ejecute cuando se haga clic en el botón "prompt", 
// preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta 
// con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
function pregunta(){
    let ciudad = prompt("¿Cuál es una ciudad de Brasil?");
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}
pregunta();

// ejercicio 4
// Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
function alerta(){
    alert("Yo amo JS");
}

// ejercicio 5
// Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
let num1 = parseInt(prompt("Ingrese un número"));
let num2 = parseInt(prompt("Ingrese el segundo número"));
let resultado = num1 + num2;
function suma(){
    alert(`La suma es: ${resultado}`);
}
suma();