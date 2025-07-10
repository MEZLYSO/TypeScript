import type { Move, PokeapiResponse } from "../interface/pokeapi-response.interface";
import { PokeapiAdapter, PokeapiAdapterFetch, type HttpAdapter } from "../api/pokeApi.adapter";


export class Pokemon {

  get imageURL(): string {
    return `https://pokemon.com/${this.id}`;
  }

  constructor(
    public readonly id: number,
    public readonly name: string,
    //Todo: inyectar depedencias 
    private readonly http: HttpAdapter
  ) { }

  async getMoves(): Promise<Move[]> {
    // Uso de la depedencia del adapter
    const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4')
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
const pokeApiFetch = new PokeapiAdapterFetch()

export const charmander2 = new Pokemon(2, "charmander", pokeApiFetch)

charmander2.getMoves()


