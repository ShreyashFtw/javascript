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

/*************Operations*****************/

let value = 3
let negValue = -value;//assign negative value
console.log(negValue);

// console.log(2+3);
// console.log(2**3);
// console.log(2%3);

let str1="Shreyash"
let str2="Thaware"

let str3=str1+str2;
console.log(str3);

console.log(1 +"2");
console.log("1" +"2");
console.log("1"+ 2 + 2);
console.log(1 + 2 +"3");

/* postfix increment-If used postfix, with operator after operand (for example, x++), 
the increment operator increments and returns the value before incrementing.

let x=39;
y=x++;
console.log(x,y);
O/P-40,39

*prefix increment-If used prefix, with operator before operand (for example, ++x), 
the increment operator increments and returns the value after incrementing.

let x1=39;
y=++x1;
console.log(x,y);
40,40*/

let gameScore = 100;
gameScore ++;
console.log(gameScore);