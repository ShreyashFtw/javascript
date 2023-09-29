const user={
    username:"shreyash",
    price:700,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome`);
        console.log(this);
    }

}
// // user.welcomeMessage();
// user.username="sunny"
// user.welcomeMessage();

// console.log(this);
//refers empty object
//browssers global object is window

// function chai(){
//     let username ="shreyash;"
//     console.log(this.username);//undefined

// }
// chai();

const chai = () => {
    let username ="shreyash;"
   console.log(this.username);
}

// chai()

const addTwo = (num1, num2) => {
  return num1 + num2//explicit
   }

   // const addTwo = (num1, num2) =>  (num1 + num2) implicit funcn
//    const addTwo = (num1, num2) => ({username: "shreyash"})

   console.log(addTwo(3,4));

   const myArray = [2,5,7,8,9]
//    myArray.forEach()