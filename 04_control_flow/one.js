// const isUserLoggedIn = true
// const temperature = 47;

// if (temperature < 50) {
//     console.log("temperature  is less than 50")

// }
// else{
// console.log("Temperature is more than 50")
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if(userLoggedIn && debitCard){//&& = and(both statement should be true)
    console.log("User can buy courses");
}
else{
    console.log("User cannot buy courses");
}

if(loggedInFromGoogle || loggedInFromEmail){// || = or(only one statement should be true)
    console.log("Logged In");
}
else{
    console.log("User not logged In");
}