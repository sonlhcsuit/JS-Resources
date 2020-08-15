
async function getgg(){
    return await fetch("http://google.com",{
        mode:"no-cors"
    }).then(res=>{
        return res
    })
}
console.log(getgg().then(res=>{
    console.log(res)
}))



