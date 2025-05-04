class Bird {
  fly(): void {
    console.log("FLY");
  }
}

class Fish {
  swim(): void {
    console.log("SWIM");
  }
}

type UnknowPet = Fish | Bird;

function getPet(pet: UnknowPet) {
  //Resguarda y verifica que swim este dentro de pet
  // if ("swim" in pet) {
  //   pet.swim();
  // }
  // if (pet as Fish) (pet as Fish).swim();

  // Con clases
  if (pet instanceof Fish) pet.swim();
}

// getPet({ swim: () => console.log("SWIM") });

const pet = new Fish();
getPet(pet);
