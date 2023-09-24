// Primitive(Call By Value)

//  7 types :String , Number , Boolean , null , undefined , Symbol, BigInt

const score= 100;
const scoreValue= 100.3;

const isLoggedIn= false;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')// Reference Type(Non Primitive)

console.log(id === anotherId);
//Array, Objects, Functions

const heros =["Superman","Batman", "Ironman"];


let myObj={
    name:"Shreyash",
    age:20,
}
console.log(myObj);
const myFunction = function(){
    console.log("Hello World");
}
myFunction();