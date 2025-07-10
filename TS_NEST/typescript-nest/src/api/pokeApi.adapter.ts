import axios from "axios";

export class PokeapiAdapter {

  // Definir dependencia como propiedad
  private readonly axios = axios

  // Definicion del metodo http para interactuar desde las clases 
  // que dependan de ella
  async get(url: string) {
    const { data } = await this.axios.get(url)
    return data;
  }

  async post(url: string, data: any) { }

  async delete(url: string) { }

  async patch(url: string, data: any) { }

}
