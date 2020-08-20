function dosth(poke){
    return fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`,{
    })
    .then(res =>{
        return res.json()
    })
    .then(res=>{
        console.log("GET ok!")
        return res
    })
}
document.getElementById("btn").addEventListener("click",()=>{
    let poke = document.getElementById("poke").value
    dosth(poke)
    .then(res=>{
        console.log(res)
        fetch(res["species"]["url"])
        .then(res=>{
            return res.json()
        }).then(res=>{
            console.log("eeeeeeeeee")
        })
        return fetch(res["species"]["url"])
        .then(res=>{
            return res.json()
        }).then(res=>{
            console.log("eeeeeeeeee")
        })
        console.log("dddddddd")
    })
    .then(res=>{
        console.log("vvvvvvvvv")
    })
    .catch(e=>{
        console.log(e.message)
    })
})