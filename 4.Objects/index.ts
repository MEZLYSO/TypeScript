//Definicion de un objeto en typescript
const persona: {
  name: string;
  edad: number;
  localidad: string;
  padres: {
    madre: string;
    padre: string;
  };
} = {
  name: "John Doe",
  edad: 23,
  localidad: "Argentina",
  padres: {
    madre: "Ana",
    padre: "Juan",
  },
};

console.log(persona.padres.madre);
