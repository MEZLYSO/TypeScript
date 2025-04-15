// Clases
//
// Definicion de un conjunto de objetos similares, que consta con metodos
// y datos que resumen la caracteritica de ses conjunto de objetos
//

interface Billable {
  currentPrice(): string;
}

abstract class Vehiculo {
  //Definir private en los atributos de la clase
  //para que no puedan ser modificados desde fuera de la clase
  // private brandName: string;
  // private model: string;
  // private color: string;

  //Crear atributos y definirlos en el contructor
  constructor(
    // Encapsulamiento
    //
    // public -> se refiere a que pueden ser llamados desde cualquier parte
    // private -> solo pueden ser llamados desde dentro de la clase
    // protected -> solo pueden ser llamados desde dentro de la clase y sus subclases
    //

    //Asignacion de readonly para que solo los atributos sean
    //de lectura y no de escritura
    protected readonly brandName: string,
    private readonly model: string,
    private readonly color: string,
    private price: number,
  ) {}

  //Getter
  //Los getters son metodos que nos permiten acceder a los atributos de la clase
  get getPrice() {
    return `Este es el precio ${this.price}`;
  }

  //Setter
  //Los setters son metodos que nos permiten modificar los atributos de la clase
  set setPrice(price: number) {
    this.price = price;
  }

  priceToCurrency(value: number, type: string) {
    switch (type) {
      case "USD": {
        return `$${value} US`;
      }
      case "EUR": {
        return `€${value} EUR`;
      }
      case "MX": {
        return `$${value} MX`;
      }
    }
  }

  //Obliga a implmentar el metodo en las subclases
  abstract drive(): void;
}

// Herencia
class Car extends Vehiculo implements Billable {
  // Sobreescritura de metodos
  drive() {
    console.log(`Estoy conduciendo un auto ${this.brandName}`);
  }
  currentPrice(): string {
    return "El valor actual es: 200";
  }
}

class Airplane extends Vehiculo {
  drive() {
    console.log(`Estoy volando un avion ${this.brandName}`);
  }
}

//Error de instanciacion de una clase abstracta
// const auto_ = new Vehiculo("Toyota", "5", "rojo", 200);

const auto = new Car("Toyota", "5", "rojo", 200);
const plane = new Airplane("Boeing", "747", "blanco", 2000);
console.log(auto.currentPrice());
console.log(plane);

//Uso de getters y setters
// console.log(auto.getPrice); // 200
// auto.setPrice = 300; // Cambiando el precio
// console.log(auto.getPrice); // 300

// console.log(auto.priceToCurrency(300, "USD")); // $300 US
// auto.drive();

// Prueba para apuntar a metodo
// let motocicleta = {
//   brandName: "Yamaha",
//   drive: auto.drive,
// };
//
// console.log(motocicleta.drive());
