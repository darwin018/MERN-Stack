// arrow function

// var a = 10;
// var testArrowFunction = ()=>{
//     console.log("This is test arrow function");
// }
// testArrowFunction()

// var arrowFunction = () => { 

//  }
//  arrowFunction()

//  scoping
var a = 10
// console.log(a)
const g = 10;
// scoping starts
{
    a = 20;
    // console.log(a)
    let b = 30;
    // console.log(b)
    let c = 40
    // console.log(c)
    var e =50
    // console.log(e)
    a = 30
    // console.log(a)
    f = 30
}
// console.log(a)
// console.log(e)
// console.log(f)

// ternary operator

a = 11
// console.log((a%2)?"Odd":"Even")

// spread operator

stud1year = ["user1","user2","user3"]
stud2year = ["user4","user5","user6"]
stud3year = ["user7","user8","user9"]
stud4year = ["user10","user11","user12"]
studDB = [...stud1year,...stud2year,...stud3year,...stud4year]
// console.log(studDB)
// alumniDB = stud4year
// console.log(alumniDB)

// Rest operator
// task : difference b/w spread operator and rest operator

function studentDB(...studDB){
    // console.log(studDB)
}
studentDB(studDB)

// destructuring operator

var arr = [10,20]
var [a,b,c] = arr
// console.log(a,b,c)

// Hoisting
//  i)variable hoisting

// console.log(z)
const z = 10
// console.log(z)

//   ii)functional hoisting

// funHoisting()
// function funHoisting(){
//     console.log("checking functional hoisting")
// }

// funHoisting = ()=>{
//     console.log("checking functional hoisting")
// }

class classEg{
    classFun(){
        console.log("Hello function from class")
    }
}

console.log(new classEg().classFun())