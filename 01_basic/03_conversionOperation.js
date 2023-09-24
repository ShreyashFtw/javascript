let score1="30abc" ;
console.log(typeof(score1));//string

let valueInNumber =Number(score1);/*typeconversion with new 
                                  variable datatype(var_name)*/
console.log(typeof (valueInNumber));
console.log(valueInNumber);

let score2= null  ;
let score3=true ;
// let score4= undefined ;

console.log(score2);
console.log(score3);
// console.log(score4);

//"33" => 33 
//"33abc"=> NaM
//true => 1

let isLoggedIn = "shreyash";

let booleanIsLoggedIn =Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//"" => false;
//"shreyash" => true;

let someNumber = 33;
let stringNumber= String(someNumber);

console.log(stringNumber);//typeof is string