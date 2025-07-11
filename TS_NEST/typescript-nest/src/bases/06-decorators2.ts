const Deprecated = (deprecationReason: string) => {
  return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
    // console.log({target})
    return {
      get() {
        const wrapperFn = (...args: any[]) => {
          console.warn(`Method ${memberName} is deprecated with reason: ${deprecationReason}`);
          //! Llamar la función propiamente con sus argumentos

          //Bloquear ejecucion
          //
          //o
          //
          //ejecucion
          // propertyDescriptor.value.apply(this, args);
        }
        return wrapperFn;
      }
    }
  }
}

const MyDecorator = () => {
  return (target: Function) => {
    console.log(target);
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

  @Deprecated('Most use speak2 method instead')
  talk() {
    console.log(this.name, this.name);
  }

  talk2() {
    console.log(this.name, this.name, this.name);
  }
}

export const bulbasar = new Pokemon(1, 'Bulbasar')

bulbasar.scream()
bulbasar.talk()
