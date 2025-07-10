
// Arreglos de numeros
// TypeScript inferiere los tipos en base a su contenido definido
// de manera implicita
// export const pokemonIds = [1, 2, 3, 4]


// Error al intentar agregar un string
// pokemonIds.push(+"2") //Conversion de string a numero



// Definicion de una interface para el pokemon
interface Pokemon {
  id: number,
  name: string,
  age?: number // Permite definir un campo como opcional
  // edad: number | undefined  --> Define que tiene que tener algun valor pero
  // tiene que venir en el objeto
}

// Objeto basado en la interface
export const pikachu: Pokemon = {
  id: 1,
  name: "Pikachu",
}

export const charmander: Pokemon = {
  id: 2,
  name: "Charmander",
  age: 20
}

// Objetos en array

export const pokemons = [];

pokemons.push(1, 'string', charmander)


