const coding = ["js", "html", "css", "cpp", "python"]

// coding.forEach(function (item){//callback function doesnt have name
//     console.log();

// })

// coding.forEach((item) => {
//     console.log(item);
// })

// function printMe(item) {
//     console.log(item);

// }
// coding.forEach(printMe)

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
});

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    }
    , {
        languageName: "Hyper Text Markup Language",
        languageFileName: "html"
    }, {
        languageName: "cascading style sheet",
        languageFileName: "css"
    }
]
myCoding.forEach((item) => {
    // console.log(item.languageFileName);
})