// Tuple. Array of fixed length and type

let rgbColour: [number, number, number] = [123, 45, 222];
rgbColour = ["111", 232, 22];

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "ok"];
const badRes: HTTPResponse = ["bad", 400]; //wrong way

// Tuples are rare. Seems to make more sense to just use an object.

// Enums.
// Defined a set of named constants. up, down, left, right. pending, shipped, delivered etc

enum OrderStatus {
  pending,
  shipped,
  delivered,
  returned,
}

// the enum in typescript has a number added against each variable. hover over

const currentStatus = OrderStatus.delivered;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.delivered;
}

isDelivered(OrderStatus.delivered);

enum OrderStatusTwo {
  pending = 10, // will now increment from 10
  shipped,
  delivered,
  returned = 99, // can make any number
}

enum ArrowKeys { // can make them a string
  up = "up",
  down = "down",
  left = "left",
  right = "right",
}

// generally it's numbers for status codes, error codes etc
