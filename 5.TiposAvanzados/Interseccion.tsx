interface User {
  name: string;
  startDate: Date;
}

type Admin = {
  name: string;
  permissions: string[];
};

// Tipo de intersección donde combinamos dos tipos
type UserAdmin_ = User & Admin;

//Extension desde una interface y una clase
interface UserAdmin extends User, Admin {}

const doctor: UserAdmin = {
  name: "Juan",
  startDate: new Date(),
  permissions: ["read", "write"],
};
