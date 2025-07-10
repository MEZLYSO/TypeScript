import axios from "axios";

export interface HttpAdapter {

  get<T>(url: string): Promise<T>

}


export class PokeapiAdapterFetch {
  async get<T>(url: string): Promise<T> {
    const resp = await fetch(url)
    const data: T = await resp.json()
    console.log('Funcionando con fetch');
    return data;
  }
}
//                            <---------------------> Implementacion de la interface
export class PokeapiAdapter implements HttpAdapter {

  // Definir dependencia como propiedad
  private readonly axios = axios

  // Definicion del metodo http para interactuar desde las clases 
  // que dependan de ella
  //        v--- Defincion del tipado en este caso lo podemos pasar como argumento
  async get<T>(url: string) {
    const { data } = await this.axios.get<T>(url)
    console.log('Funcionando con axios');
    return data;
  }

  // async post(url: string, data: any) { }

  // async delete(url: string) { }

  // async patch(url: string, data: any) { }

}
