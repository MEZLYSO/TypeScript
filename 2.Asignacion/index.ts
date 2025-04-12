// Diferentes formas de asignar tipos de dato en TypeScript

//--Valores en una funcion
function suma(a: number, b: number) {
  return a + b;
}

//--Retorno de ujna funcion

function suma(a: number, b: number): number {
  return a + b;
}

//--Variables
//Lo cual permite que durante la ejecución de la aplicación, el valor de la variable pueda cambiar
//pero acorde al tipo de dato que se le asigna

let a: number = 23;
const name: string = "Juan";

//--Errores al intentar asignar un tipo de dato diferente

a = "23"; //Error: Type 'string' is not assignable to type 'number'
name = 23; //Error: Type 'number' is not assignable to type 'string'
