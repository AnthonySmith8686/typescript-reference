// allow us to describe the shape of objects. only objects!

// similar to just using 'type'...

//key difference. interfaces only object. interfaces should be able to duplicate but don't...

// You can use extends - a bit like OOP. can't use with types.

interface PointExample {
  x: number;
  y: number;
}

const pt: PointExample = { x: 123, y: 122 };

interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  sayHi: () => string; // this is a method that returns a string
  sayBye(): string; //either syntax works to indicate it's a method
}

const bobby: Person = {
  id: 123,
  first: "Bobby",
  last: "Geez",
  sayHi: (name: string) => {
    return "hello";
  },
};

bobby.id = 234;

interface Product {
  name: string;
  price;
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: "Blue Suede Shoes",
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

shoes.applyDiscount(0.4);

// interfaces can be appended to

interface Dog {
  name: string;
  age: number;
}

interface Dog {
  // or can they....?
  breed: string;
  bark(): string;
}

const elton: Dog = {
  name: "Elton",
  age: 0.5,
  breed: "Rottweiler",
  bark() {
    return "woof ";
  },
};

interface ServiceDog extends Dog {
  job: "drug sniffer" | "bomb" | "guide dog"; // uses a union
}

const chewy: ServiceDog = {
  name: "chewy",
  age: 4.5,
  breed: "labrodor",
  bark() {
    return "bark";
  },
  job: "guide dog",
};

interface Individual {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

interface Engineer extends Individual, Employee {
  level: string;
  languages: string[];
}

const henrik: Engineer = {
  name: "Henrik Von Bazkemph",
  id: 128432,
  email: "henrik@goaway.net",
  level: "Senior",
  languages: ["Java", "C", "JavaScript", "Afrikaans"],
};
