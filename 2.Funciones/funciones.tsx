//Funciones

// Definicion de retorno de la funciones de manera implicita
function sumar(a: number, b: number): number {
  return a + b;
}

function imprimir() {
  console.log(sumar(2, 3));
}

// Podemos retornar undefine
function imprimir2() {
  return undefined;
}

//Impresion de la funcion
imprimir();
