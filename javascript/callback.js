// function SJITCollege(message,callBackSJIT){
//     console.log(message)
//     callBackSJIT()
// }

// function callBackSJIT(){
//     console.log("Welcome back to SJIT")
// }
// SJITCollege("Welcome to SJIT",callBackSJIT)

function formSubmission(message,cbFun){
    if(!cbFun()){
        console.log("Form submission unsuccessful")
    }
    else{
        console.log(message)
    }
}
function formValidation(){
    
    console.log("Form validation successful") 
    return true
    
}
formSubmission("Form submitted successfully",formValidation) 