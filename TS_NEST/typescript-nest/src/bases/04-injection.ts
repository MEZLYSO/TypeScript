import type { Move } from "../interface/pokeapi-response.interface";
import { PokeapiAdapter } from "../api/pokeApi.adapter";


export class Pokemon {

  get imageURL(): string {
    return `https://pokemon.com/${this.id}`;
  }

  constructor(
    public readonly id: number,
    public readonly name: string,
    //Todo: inyectar depedencias 
    private readonly http: PokeapiAdapter
  ) { }

  async getMoves(): Promise<Move[]> {
    // Uso de la depedencia del adapter
    const data = await this.http.get('https://pokeapi.co/api/v2/pokemon/4')
    console.log(data.moves);
    return data.moves
  }

  public scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
    this.speak()
  }

  private speak() {
    console.log(this.name, this.name);
  }

}

// Instancia del Adapter de la API
const pokeApi = new PokeapiAdapter()

export const charmander2 = new Pokemon(2, "charmander", pokeApi)

charmander2.getMoves()


