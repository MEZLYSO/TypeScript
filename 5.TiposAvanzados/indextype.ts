// {email: "email invalid", password: "error password"}
interface ErrorType {
  [key: string]: string;
}

const errorMessage: ErrorType = {
  email: "email invalid",
  password: "password invalid",
};

console.log(errorMessage);
