//Se le define un valor numerico de acuerdo a la posicion del enum
enum role {
  estudiane,
  profesor,
}

let persona = {
  name: "John Doe",
  age: 30,
  directory: "New York",
  role: role.estudiane,
};

let hobbies: any[] = ["Futbol", 1, true];

console.log(persona);
