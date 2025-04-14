//Definicion de array en typescript

const arreglo = ["Dart", "React", "TypeScript"];
console.log(arreglo[1]);

// Declaracion definida
let hoobies: string[];
hoobies = ["Correr", "Leer", "Dibujar"];
//hoobies = ["Correr", "Leer", "Dibujar", 34]; //Type error

//solucion definiendo el tipo "any" que significa cualquiera en este el array podra tomar
//cualquier valor

let array: any[] = ["Correr", 2, true];

for (const hobbie of hoobies) {
  console.log(hobbie.toUpperCase());
}

console.log(hoobies);
