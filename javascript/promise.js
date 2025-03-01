// function promiseEg(value){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(value){
//                 resolve("The promise is resolved")
//             }else{
//                 reject("This promise is rejected due to value is unmet")
//             }
//         }, 5000)
//     })
// }
// promiseEg(false).then((res)=>{
//     console.log(res)
// }).catch((res)=>{
//     console.log(res)
// })

// Location Finder
//   1. Promise(LocFound,LocNotFound)
//   2. Chennai,2000

function locationFinder(loc,time){
    var location = new Promise((locFound,locNotFound)=>{
        setTimeout(()=>{
            if(isLocationFound(loc,time)){
                locFound(loc)
            }else{
                locNotFound(loc+" Not Found")
            }
        }, time)
    })
    location.then((res)=>{
        console.log(res)
    }).catch((res)=>{
        console.log(res)
    })
}
isLocationFound = (loc,time)=>{
    location = "Chennai"
    t = 3000
    if(loc === location && time >= t){
        return true
    }else{
        return false
    }
}
locationFinder("Chennai",2000)