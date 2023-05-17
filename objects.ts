const printName = (person: { first: string; last: string }): string => {
  return `Hello ${person.first} ${person.last}`;
};

printName({ first: "Emannuel", last: "Tetteh" });

function coordinates(): { x: number; y: number } {
  // this is to return a type annotation of an object
  return { x: 55, y: 66 }; // an object needs to be returned in the exact format
}

printName({ first: "Mick", last: "Jagger", age: 77 }); //has a problem with age when it's done inline
const singer = { first: "Mick", last: "Jagger", age: 77 };
printName(singer); // doesn't mind if the variable has the age though! This is to make sure you only pass the properties required. With a variable it will only check for the ones outlines and will ignore the rest

// Type Aliases

// You can set up a reference before hand

type Point = {
  x: number;
  y: number;
};

let coordinate: Point = { x: 34, y: 2 };

function doublePoint(point: Point): Point {
  return { x: point.x * 2, y: point.y * 2 };
}

doublePoint({ x: 22, y: 56 });

// Song type

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
  title: "No One Knows",
  artist: "Qotsa",
  numStreams: 2500000,
  credits: {
    //nested object
    producer: "Eric Valentine",
    writer: "Josh Homme",
  },
};

const earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);

type Shape = {
  x: number;
  y: number;
  z?: number; // ? means optional
};

const myShape: Shape = { x: 1, y: 3 }; //You don't need to have the z added.

// Readonly

type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 1222343,
  username: "smiffy86",
};

console.log(user.id); // this is ok
user.id = 123422; // telling you that you can't redefine as you can only read it - 'readonly'

// Intersection Types

type Circle = {
  radius: number;
};

type Colourful = {
  colour: string;
};

type ColourfulCircle = Circle & Colourful;

const happyFace: ColourfulCircle = {
  radius: 4,
  colour: "yellow",
};

type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

type CatDog = Cat &
  Dog & {
    age: number;
  };

const barney: CatDog = {
  numLives: 4,
  breed: "Collie",
  age: 8,
};

type Movie = {
  readonly title: string;
  originalTitle?: string;
  director: string;
  releaseYear: number;
  boxOffice: {
    budget: number;
    grossUS: number;
    grossWorldwide: number;
  };
};

const getProfit = (movie: Movie): number => {
  const { grossWorldwide, budget } = movie.boxOffice;
  return grossWorldwide - budget;
};

const matrix: Movie = {
  title: "The Matrix",
  director: "Wakowski Bros",
  releaseYear: 2004,
  boxOffice: {
    budget: 4500000,
    grossUS: 12000000,
    grossWorldwide: 23000000,
  },
};

const matrixprofit = getProfit(matrix);
console.log(matrixprofit);
