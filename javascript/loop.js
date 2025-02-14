// looping statements

// for(..in)
arr = [10,20,30,"abc",true,"hello",[10,20,30]]
for(i in arr){
    // console.log(i)
}

object1 = {
    "firstName" : "St.Josep's",
    "secondName" : "Institute of Technology",
    "dept" : ["CSE","IT","ECE","ADS"],
    "training" : "MERN"
}
for(i in object1){
    // console.log(i+" : "+object1[i])
}

// forof loop

arr = [10,20,30,"abc",true,"hello",[10,20,30]]
object1 = {
    "firstName" : "St.Josep's",
    "secondName" : "Institute of Technology",
    "dept" : ["CSE","IT","ECE","ADS"],
    "training" : "MERN"
}

for([key,value] of Object.entries(object1)){
    // console.log(key,value)
}

// forEach

Object.entries(object1).forEach((key,ele) =>{
    console.log(key,ele)
})