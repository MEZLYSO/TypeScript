// Destructuracion de un modulo
// import { name, edad, TemplateString } from "./bases/01-types"

import { charmander2 } from "./bases/04-injection";


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  HI ${charmander2.name}
  </div>`

