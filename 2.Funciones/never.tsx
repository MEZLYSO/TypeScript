//Never
//Never nunca va a retornar nada a causa de que nunca va a terminar
//Donde Void puede retornar null o undefined, never no retorna nada
//
function suma(a: number, b: number): number {
  return a + b;
}

const throwError = (message: string): never => {
  //if (!message) {
  throw new Error(message);
  //}
  //Esto condiciona que pueda retornar un valor pasando de never a string
  //return message;
};
