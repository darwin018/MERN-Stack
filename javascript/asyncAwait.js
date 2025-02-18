// async function asAw(){
//     var a = 15
//     setTimeout(function(){
//         console.log("Hello")
//     },5000)
//     console.log(await a)
// }
// asAw()

// Instagram Console Demo for post,like,comment,share
likeCode = async ()=>{
    return new Promise((likePost) => {
        setTimeout(()=>{
            likePost("Post liked successfully")
        },5000)
    })
}
commentCode = async ()=>{
    return new Promise((commentPost) => {
        setTimeout(()=>{
            commentPost("Commented on the post successfully")
        },5000)
    })
}
shareCode = async ()=>{
    return new Promise((sharePost) => {
        setTimeout(()=>{
            sharePost("Post shared successfully")
        },5000)
    })
}
async function postCode(){
    var post = new Promise((createPost) => {
        setTimeout(()=>{
            createPost("Post created successfully")
        },5000)
    })
    const [pos,like,comment,share] = await Promise.all([post,likeCode(),commentCode(),shareCode()])
    console.log(pos)
    console.log(like)
    console.log(comment)
    console.log(share)
}
postCode()