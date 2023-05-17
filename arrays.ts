// Arrays

const activeUsers: string[] = [];

activeUsers.push("Brian");

const ageList: number[] = [45, 66, 24];
ageList[0] = 25;
agelist["test"]; //doesn't work

const bools: boolean[] = [];
const boolsTwo: Array<boolean> = []; //same thing

type testObj = {
  x: number;
  y: number;
};

const coords: testObj[] = [];
coords.push({ x: 23, y: 8 }); // an array of objects
coords.push({ x: 23 }); // it knows that y is missing from the object

// multidimensional array. you need to speficy the type and then how many nestings there are

const board: string[][] = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
];

const ages: number[] = [];
const gameBoard: string[][] = [];
type Product = {
  name: string;
  price: number;
};

function getTotal(products: Product[]): number {
  let total = 0;
  for (let product of products) {
    total += product.price;
  }
  return total;
}
