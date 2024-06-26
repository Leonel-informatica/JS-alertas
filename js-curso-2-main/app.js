let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora del Desafío";

function mensajeEnConsola() 
{
    console.log("El botón fue clicado");
}

function ciudadDeBrasil()
{
    alert('¿Conoces alguna ciudad de brasil?');
    alert('¿Conoces alguna ciudad de brasil?.  Estuve en Sao Paulo y me acordé de ti');
}

function yoAmoJS()
{
    alert('Yo amo JavaScript.');
}

function suma()
{
    let numero1 = parseInt(prompt('Ingrese el primer número'));
    let numero2 = parseInt(prompt('Ingrese el segundo número'));
    let resultado = numero1 + numero2;
    alert('El resultado de la suma es: ' + resultado);
}