// Union types

let age: number = 21; //standard
age = "22"; // doesn't work

let ageTwo: number | string = 21;
ageTwo = "24"; //both work

type pointOne = {
  x: number;
  y: number;
};

type location = {
  lat: number;
  long: number;
};

let coordinatesTest: pointOne | location = { x: 1, y: 34 };
coordinatesTest = { lat: 321.222, long: 23.234 }; // works for either

function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

printAge(23);
printAge("44");

// Type Narrowing - You use typeof on a value and typescript can do the rest!

function calculateTax(price: number | string, tax: number) {
  //return price*tax  can't do as it could potentially be a string...
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  return price * tax; // this is clever as it knows that is either a string that was turned into a number, or it's now the number that's part of the else
}

const items: any[] = [1, 2, 3, 4, true, "ant"];
const itemsTwo: (number | string)[] = [1, 2, 3, "ant"]; //the parenthesis are important to show it's BOTH and not just one of them. other wise it would be a SINGLE number or an array of strings e.g
const wrongItems: number | string[] = [1, 2, 3, "ant"]; //doesn't work

// Literal Types

const zero: 0 = 0; //has to be exactly 0
zero = 2;

// Can use with a union to have several exact possibilities

let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";
mood = "Angry";

type DayOfWeek = "Monday" | "Tuesday" | "Wednesday"; //etc

let today: DayOfWeek = "Monday";
today = "Wedz";
today = "Wednesday";

// Test
let highScore: number | boolean = 1500;
highScore = true;
highScore = "no";

let stuff: number[] | string[] = [1, 2, 3];
stuff = ["thing", "table", "omelette"];
stuff = [1, "stuff", "chocolate"]; // can't mix. it's either numbers or strings

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

type SkiSchoolStudent = {
  name: string;
  age: number;
  sport: "ski" | "snowboarding";
  level: SkillLevel;
};

type rgb = {
  r: number;
  g: number;
  b: number;
};

type hsl = {
  h: number;
  s: number;
  l: number;
};

const coloursArray: (rgb | hsl)[] = [
  { r: 123, g: 11, b: 23 },
  { h: 22, s: 22, l: 45 },
];

const greeting = (person: string | []): void => {
  if (typeof (person === "string")) {
    console.log(`Hello ${person}`);
  } else {
    for (let p of person) {
      console.log(`Hello ${p}`);
    }
  }
};
