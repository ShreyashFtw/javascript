// const tinderUser = new Object() creates empty object {}
const tinderUser ={};//non-singleton object

tinderUser.id ="123abc"
tinderUser.name = "shreyash"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUser = {
    email:"shreyash@gmail.com",
    fullname:{
        userfullname: {
            firstname:"shreyash",
            lastname:"thaware"
        }
    }
}
// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);


const obj3={...obj1,...obj2};
console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
