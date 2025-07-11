
// Los decoradores son funciones 
// que tiene acceso a la estructura de la clase donde 
// podemos realizar gran variedad de modificaciones a 
// la misma

class newPokemon {
  constructor(
    public readonly id: number,
    public name: string
  ) { }

  scream() {
    console.log(`${this.name.toLowerCase()}!!!`);
  }

  talk() {
    console.log(":(");
  }

}

const MyDecorator = () => {
  return (target: Function) => {
    console.log(target);
    // Sobreescritura de la clase
    return newPokemon
  }
}

@MyDecorator()
export class Pokemon {
  constructor(
    public readonly id: number,
    public name: string
  ) { }

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  talk() {
    console.log(this.name, this.name);
  }
}

export const bulbasar = new Pokemon(1, 'Bulbasar')

bulbasar.scream()
bulbasar.talk()
