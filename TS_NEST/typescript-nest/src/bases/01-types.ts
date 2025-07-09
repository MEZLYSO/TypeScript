// definicion de exportaciones en ts 
export let name = "Mauricio"
export let edad: number = 20

// TypeScript infiere los tipos 
// name = true // error because name is type string
// edad = "23" // error because edad is type number

// Template Strings 
export const TemplateString =
  `Esto es un Template string \$ hola intento de algo ${1 + 1} \n 
  nombre: ${name}`
