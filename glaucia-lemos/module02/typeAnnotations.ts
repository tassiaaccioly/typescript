//let variable: TypeAnnotation = value

function addNumbers(num1: number, num2: number) {
  return num1 + num2;
}

// Variáveis [Type Annotation]
let myName: string = "Tassia Accioly";
console.log(myName);

//objetos
let car: {
  carName: string;
  year: number;
  price: number;
};

car = { carName: "Toyota Yaris Sedan XS", year: 2019, price: 80000 };
console.log(car);

// Functions
function multiplyNumbers(num1: number, num2: number) {
  return num1 + num2;
}

console.log(multiplyNumbers(2, 9));
