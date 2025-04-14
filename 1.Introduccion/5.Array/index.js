//Definicion de array en typescript
var arreglo = ["Dart", "React", "TypeScript"];
console.log(arreglo[1]);
// Declaracion definida
var hoobies;
hoobies = ["Correr", "Leer", "Dibujar"];
//hoobies = ["Correr", "Leer", "Dibujar", 34]; //Type error
//solucion definiendo el tipo "any" que significa cualquiera en este el array podra tomar
//cualquier valor
var array = ["Correr", 2, true];
for (var _i = 0, hoobies_1 = hoobies; _i < hoobies_1.length; _i++) {
    var hobbie = hoobies_1[_i];
    console.log(hobbie.toUpperCase());
}
console.log(hoobies);
