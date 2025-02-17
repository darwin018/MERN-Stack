function SJITCollege(message,callBackSJIT){
    console.log(message)
    callBackSJIT()
}

function callBackSJIT(){
    console.log("Welcome back to SJIT")
}
SJITCollege("Welcome to SJIT",callBackSJIT)