const accountId = 100033;
let accountEmail = "shreyashftw@gmail.com"; // has no scope problem.
var accountPassword = "12345"; //curly braces {} are called scope.
accountCity = "Pune";
let accountState;//undefined

// accountId = 345// not allowed because constant value is fixed up.

accountEmail = "Shreyash@gmail.com";
accountPassword = "67890";
accountCity = "patna";

console.log("accountId");

/*
prefer not to use var because of 
issue in block slope and fuctional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
