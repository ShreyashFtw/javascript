function sayMyName(){
    console.log("Shreyash");
}
// sayMyName();

// function addTwoNumbers(num1,num2){
//   console.log(num1 + num2);
// }

// addTwoNumbers( 3 ,"a");

function addTwoNumbers(num1,num2){
   let result= num1 + num2;
   return result;
     }
const result = addTwoNumbers( 3 , 4 );

// console.log("Result:",result);

function loginUserMessage(username="s0n"){
    if(!username)
    {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("shreyash"));
console.log(loginUserMessage());

function calculateCartPrice(val1,val2,...num1){//rust
    return num1;
}
// console.log(calculateCartPrice(200,400,500));

const user={
    username:"shreyash",
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is${
    anyobject.price}`);
}
// handleObject(user);

const myNewArray =[100,200,300];

function returnSecondValue(getArray){
    return getArray[2];

}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,200,300]));