// Destructuracion de un modulo
// import { name, edad, TemplateString } from "./bases/01-types"

import { pokemons } from "./bases/02-objects"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    ${pokemons.join(',')}
  </div>`

