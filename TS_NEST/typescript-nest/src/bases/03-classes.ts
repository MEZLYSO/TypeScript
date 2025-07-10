
// Defincion de una clase

import axios from "axios";
import type { Move, PokeapiResponse } from "../interface/pokeapi-response.interface";

// --> De manera explicita
export class Pokemon {

  public id: number;
  public name: string;

  // Definicion de constructor para crear objetos
  constructor(
    // Evitar que se infiera como any
    id: number,
    name: string
  ) {
    this.id = id,
      this.name = name
  }

}

// --> Version corta

export class Pokemon2 {

  //Getters 
  get imageURL(): string {
    return `https://pokemon.com/${this.id}`;
  }

  constructor(
    public readonly id: number,
    public readonly name: string,

  ) { }

  // Metodos 

  // Metodos asincronos
  // Usando promesas 

  async getMoves(): Promise<Move[]> {
    // Sin await retorna promesas pendientes
    const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4')
    console.log(data.moves);
    return data.moves
  }

  public scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
    this.speak()
  }

  //Define un metodo que solo tiene acceso dentro de la clase
  private speak() {
    console.log(this.name, this.name);
  }

}

// Defincion de argumentos para la creacion del objeto
export const pikachu = new Pokemon(1, "Pikachu")

pikachu.id = 20 // Se pueden modificar las propiedades

// Creacion de objeto con clase dos 

export const charmander = new Pokemon2(2, "charmander")
console.log(charmander);
// Validacion del getter
console.log(charmander.imageURL);
charmander.scream()
//charmander.id = 3 // Error al intertar modificar algo con readonly
// Esto permite definir propiedades para solo lectura

//Uso de Metodos asincronos
console.log(charmander.getMoves());


