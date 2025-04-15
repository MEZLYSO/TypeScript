enum Role {
  Doctor,
  Asistente,
  Administrativo,
  Anestesista,
}

// Diferencias entre types e interfaces
//
// Las interfaces solo sirven para definir estrutura de un objeto
// Trabaja con objetos que cumplan con sus atributos no necesariamente tiene que tener solo los atributos que definimos
//
// Los types nos permiten o tienen mas flexibilidad no solo limitada a objetos
//

type Staff_ = {
  name: string;
  email: string;
  role: Role;
};

interface Staff {
  name: string;
  email: string;
  role: Role;
  currentRole(): string;
}

interface Roles {
  currentRole(): string;
}
//

const medico: Staff = {
  name: "Juan",
  email: "juan@gmail.com",
  role: Role.Doctor,
  currentRole() {
    return this.role;
  },
};

const printStaff = (staff: Staff) => {
  console.log(staff);
};

const printRole = (Rol: Roles) => {
  console.log(Rol.currentRole());
};

printStaff(medico);
printRole(medico);
