// singleton
// Object.create

// object literals
const mySym = Symbol("key1")

const JsUser = {
    Name:"Shreyash",
    [mySym]:"mykey1",//for symbol square bracket[]
    age: 20,
    location:"xyz",
    email:"shreyashthaware3@gmail.com",
    isLoggedIn:false,
    LastLogInDays:["Monday","Thursday"],


}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser.age);
// console.log(JsUser[mySym]);

JsUser.email ="shreyash@micro.com";
// Object.freeze(JsUser);
JsUser.email="shreyash@googler.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello how are you user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.Name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
