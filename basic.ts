const stringTest: string = "hello";

let movieTitle: string = "Matrix";
movieTitle = "John Wick";

let myNumber: number = 69;

const myBoolean: boolean = true;

// Type inferance. Typescript will automatically add the type to a variable that doesn't have it implicitly added e.g

let tvShow = "Cooking with Dave";

tvShow = false;

// error changing it to false

// any type

let thing: any = "string";

thing = 99;
thing = false;
thing();
thing.toUppercase();

let setMovie;
const movies = ["shrek", "godfather", "enter the dragon"];

movies.forEach((movie) => {
  if (movie === "shrek") {
    setMovie = "shrek";
  }
});

// setMovie is currently defaulted as 'any' type. it should really be set as 'let setMovie: string'. You need to prevent the implicit 'any'.

function square(num) {
  num.toUppercase();
  num * num;
}

square(true);

// num is currently 'any'. You need to specify what the argument needs to be.

function squared(num: number) {
  num * num;
}

squared(true); // checks
squared(6);

function greet(person: string) {
  person * person; // can't do
  return `Hello there lovely ${person}`;
}

greet(true); // can't do
greet("Simon");

const randomFunction = (person: string, age: number, isFunny: boolean) => {};

randomFunction("Helmut Krum", 69, false); // have to have all arguments in order
randomFunction("Danny Dyer", true);
randomFunction(false);

const anotherFunction = (person: string = "Rodney"): string => {
  console.log(person);
  return person;
};

// anotherFunction is a function with a default parameter of 'Rodney'.

anotherFunction(); // This will console log Rodney
anotherFunction("Bobby"); //this overrides the default and is standard in JS. it's the ': string' that's typescript

//anotherFunction has the return type added as :string

function multiply(num: number): number {
  // is indicating that a number isn't being returned from the function
  num * num; // no 'return'
}

function doNothing() {
  // when the function does not RETURN the type is void by default
  2 + 2;
}

function secondsInDay() {
  // typescript knows this should take a number as the RETURN is a number
  return 24 * 60 * 60;
}

const colours = ["red", "blue", "orange"];

colours.map((colour) => {
  colour.Math.random(); // it knows it should be a string as the array is full of string only.
});

function logOutput(msg: string): void {
  // you can use void if you know you're not returning anything
  console.log(msg);
}

function makeError(msg: string): never {
  return msg; // never will highlight that return should never happen. default is void, which could work but never is more specific
  throw new Error(msg);
}

function gameLoop(): never {
  // a loop that has to always run...
  while (true) {
    console.log("loop running");
  }
}

function random(): void {
  return "hello";
}

// Void and Never are sublely different.

// Tests

const twoFer = (person: string = "you"): string => {
  return `one for ${person}, one for me`;
};

twoFer("Elton");

const isLeapyear = (year: number): boolean => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0; // this line will return true
}; // the function will otherwise return false
