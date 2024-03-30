// for of
//["" ,"" ,""]
//[{},{},{}]


const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World"

for (const greet of greetings) {
    // console.log(`Each character is ${greet}`);

}

//Maps

const map = new Map()//Map is a object
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("UK", "United Kingdom")

// console.log(map)
for (const [abbrevations,country] of map) {//map has unique key-value pair and is ordered no duplicate allowed
    console.log(abbrevations,"=>",country);
    
}


const myObj={
    name:"Shreyash",
    age:20,
}

for (const [key,value] of myObj) {
    // console.log(key,value);
    // TypeError: myObj is not iterable
}