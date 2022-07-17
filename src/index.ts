// ENUMS

// const small = 1
// const medium = 2
// const large = 3

// const enum Size {
//   Small = 1,
//   Medium,
//   Large,
// }

// let mySize = Size.Medium;

// console.log(mySize);

// FUNCTIONS

// function NAME(PARAMETERS: TYPE): RETURN_TYPE
// function calculateTax(income: number, taxYear = 2022): number {
//   if (taxYear < 2022) return income * 0.25;
//   return income * 0.3;
// }

// console.log(calculateTax(40, 2019));

// OBJECTS

// type Employee = {
//   id: number;
//   readonly name: string;
//   retire: (date: Date) => void;
// };

// let john: Employee = {
//   id: 1,
//   name: "John",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// let Martin: Employee = {
//   id: 2,
//   name: "Martin",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// UNION TYPES

// function kgToLbs(weight: number | string): number {
//   if (typeof weight === "number") return weight * 2.2;
//   else return parseInt(weight) * 2.2;
// }

// INTERSECTION TYPES

// type Draggable = {
//   drag: () => void;
// };

// type Resizable = {
//   resize: () => void;
// };

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//   drag: () => {},
//   resize: () => {},
// };

// LITERAL TYPES

// type Quantity = 50 | 100;

// let quantity: Quantity;

// type Metric = "cm" | "m" | "km" | "mm";

// NULLABLE TYPES

// function greet(name: string | null | undefined) {
//   if (name) console.log(name.toUpperCase());
//   else console.log("Hello!");
// }

// greet(null);

// type Customer = {
//   birthdate?: Date;
// };

// const getCustomer = (id: number): Customer | null | undefined => {
//   return id === 0 ? null : { birthdate: new Date() };
// };

// let customer = getCustomer(0);
// Optional property access operator
// console.log(customer?.birthdate?.getFullYear());

//Optional element access operator
//customers?.[0]

//Optional call
// let log: any = null;
// log?.("Hello");

//TYPE OF GUARD

// type RenderFn = () => string;

// const renderText = (text: string | RenderFn) => {
//   if (typeof text === "string") {
//     return text;
//   } else {
//     return text();
//   }
// };

// type Circle = {
//   radius: number;
// };

// type Square = {
//   width: number;
//   height: number;
// };

// type Shape = Circle | Square;

// const calculateArea = (shape: Shape) => {
//   if ("radius" in shape) {
//     return Math.PI * shape.radius ** 2;
//   } else {
//     return shape.width * shape.height;
//   }

//Switch guards

// type Payload = { kind: "Error"; code: number } | { kind: "Success"; data: string } | { kind: "Not Found" };

// const getMessage = (response: Payload) =>  {
//   switch (response.kind) {
//     case "Error":
//       return `Error ${response.code}`;
//     case "Success":
//       return `Success ${response.data}`;
//     case "Not Found":
//       return "Not Found";
//   }
// }

// GENERICS

// type User = {
//   name: string;
//   age: number;
// };

// type Post = {
//   title: string;
// };

// type ApiPayload<T> = {
//   statusCode: number;
//   data: T;
// };

// const parseApiUser = (payload: ApiPayload<User>) => {
//   payload.data.name;
// };

// const filterSuccessfulResponses = <Data>(payload: ApiPayload<Data>[]) => {
//   return payload.filter((p) => p.statusCode === 200);
// };

// const payload: ApiPayload<User>[] = [];
// const results = filterSuccessfulResponses(payload);

// const first = results[0].data;

// READONLY GENERIC TYPES

// type Article = Readonly<{
//   title: string;
//   content: string;
//   author: string;
//   meta: Readonly<{
//     likes: number;
//   }>;
// }>;

// type Article = Partial<{
//   title: string;
//   content: string;
//   author: string;
//   meta: Partial<{
//     likes: number;
//   }>;
// }>;

// type Articl2e = Required<{
//   title: string;
//   content: string;
//   author: string;
//   meta: Required<{
//     likes: number;
//   }>;
// }>;
