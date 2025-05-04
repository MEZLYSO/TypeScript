// Function Overload

type stringOrArray = string[] | string;

// Sobrecarga
function reverse(stringOrArray: string): string;
function reverse(stringOrArray: string[]): string[];
function reverse(stringOrArray: stringOrArray): stringOrArray {
  return typeof stringOrArray === "string"
    ? stringOrArray.split("").reverse().join("")
    : stringOrArray.slice().reverse();
}

// console.log(reverse("Hola Mundo"));

const array = ["H", "o", "l", "a"];
console.log(reverse(array));
// Una ves que realizamos una Sobrecarga podemos
// tener acceso a los metodos del tipo correspondiente
array.sort();
