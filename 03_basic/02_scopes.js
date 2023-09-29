// {} are called scopes when it is function, not with object.
// var c =300
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  console.log("INNER:", a);
}

console.log(a);

function one() {
  const username = "shreyash";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website);
  two();
}
// one();

if(true){
    const username = "shreyash";
    if ( username == "shreyash"){
        const website="shreyash.com";
        console.log(username + website);
    }
    // console.log(website);cant excess out of block scope
}
// console.log(username);

// **********example***************

function addone(num){
return num + 1

}
console.log(addone(5));

const addTwo = function(num){//canmt get output if we call before intitalization
    return num + 2
}

addTwo(5)