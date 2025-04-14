//Definir tipos a una función que apunta

const sumar = (a: number, b: number): number => {
  return a + b;
};

const imprimir = () => {
  console.log(sumar(1, 2));
};

//Define el tipo funcion donde esta variable solo almacena funciones
//let sumar2: Function;

//Definimos la estrutura y tipos de la funcion
let sumar2: (a: number, b: number) => number;
sumar2 = sumar;

console.log(sumar2(1, 2)); // 3 y undefined
