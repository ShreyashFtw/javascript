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

//**************************************** */

// Stack (Primitive ) we get copy, Heap (Non-Primitive) reference is same in heap

let myYtName = "Shreyash";

let anotherName= myYtName;
anotherName= "Suresh";
console.log(myYtName);
console.log(anotherName);

let user1 = {
    email :"user@google.com",
    upi: "user@paytm"
}
console.log(user1);

let user2 = user1;

user2.email="shreyash@google.com";
console.log(user1.email);
console.log(user2.email);