//Callback

function imprimir(a: number, b: number, mostrar: (value: number) => void) {
  const resultado = a + b;
  mostrar(resultado);
}

//Implementacion de la funcion
imprimir(5, 10, (number) => console.log(number * 2)); // 30
