// Arrays and their properties

let fruit:string[] = ["Apple", "Orange", "Mango", "Banana", "Pineapple"];

function fruits(){
let a = fruit.pop(); // remove from the last
fruit.push("Grapes"); // add in the last
console.log(a); 
}
fruits()


let b = fruit.shift(); // remove from the start 
fruit.unshift("watermelon"); // add in the start
console.log(b);



fruit.splice(2,2); // "Mango" pehla (2) kahan se start kerna hai or doosra (2) kitne delete kerne hai (for ex. 2 \ 3 \ 1 )
fruit.splice(2,1); // "Banana"
fruit.splice(3,0, "Grapes");
fruit.splice(1,1, "Watermelon");
fruit.splice(5,1);


// console.log(fruit);
// console.log(fruit.length);

// console.log(fruit[1]);
// console.log(fruit[2]);
// console.log(fruit[3]);

// original array ko nhi badle ga balke iski copy bana ker nikal leta hai (slice function)
// let c = fruit.slice(4,5); // Pineapple(4,5) | "Orange","Mango" = (1,3) | 
// let d = fruit.slice(1); // "Orange" - "Pineapple"(End)
// let e = fruit.slice(); // full array copy
// console.log(c);
// console.log(d);
// console.log(e);



let vagetable:string[] = ["Locky", "Potato", "Tomato", "Ladyfinger",];

// fruit.push("Fried Onion"); // add in the last
// fruit.pop(); // remove from the last
// fruit.unshift("Onion"); // add in the start
// fruit.shift(); // remove from the start
// console.log(vagetable);




// Tuples

let fruitTuple: [string, string, number, string] = ["Apple", "Banana", 56, "Watermelon"]
fruitTuple.push("Grape");
console.log(fruitTuple);



// HomeWork 
// google

// learn typescript panaverse
// step10_tuples 
// step08_arrays





let fruitTask:string[] = ["Apple", "Mango","Banana", "Grapes", "Pineapple", "Kiwi"];
// fruitTask.splice(0,3);

// fruitTask.splice(2,2);
// fruitTask.pop();

// fruitTask.splice(3,1,"Orange");

fruitTask.splice(1,2, "Strawbarry", "Lemon");
console.log(fruitTask);