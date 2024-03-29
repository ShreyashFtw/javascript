const userEmail = []//we assume string as true value
//if we take empty string false value
//if we take empty array true value

if (userEmail) {
    console.log("got the user email");
} else {
    console.log("didn't get the user email");

}

//falsy values
// false, 0 , -0 ,bigint 0n, null , undefined , NaN , ""

//truthy values(inside string value becomes true)
// 1.true," 0 " ,'false', " ", [] ,{}
//2.function (){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");

}
//Object.keys(emptyObject) converted into array

//Nullish coalescing operator(??):null undefined

let val1;
// val1=5 ?? 10 //5
// val1= null ?? 10 //10
// val1 = undefined ?? 15

val1 = null ?? 10 ?? 20
console.log(val1);

//terniary operator

// condition ? trueValue : falseValue

const iceTeaPrice = 100

iceTeaPrice >=80 ? console.log("more than 80") : console.log("less than 80")