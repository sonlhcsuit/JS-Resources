let _top = document.getElementById("_top")
let _bottom = document.getElementById("_bottom")
let _left = document.getElementById("_left")
let _right = document.getElementById("_right")
let img = document.getElementById("img")
let text = document.getElementById("text")
_top.value = _bottom.value = _left.value = _right.value = 

[_top,_bottom,_left,_right].forEach(val=>{
    val.addEventListener("input",updateBorder)
})


function updateBorder(){
    let topleft = _top.value - _left.value 
    let topright =_top.value - _right.value
    let botright=_bottom.value - _right.value
    let botleft = _bottom.value - _left.value
    topleft = topleft <= 0 ? 0:topleft
    topright = topright <= 0 ? 0:topright 

    botright = botright <= 0 ? 0:botright 

    botleft = botleft <= 0 ? 0:botleft 

    let value = `border-radius: ${topleft}% ${topright}% ${botright}% ${botleft}%`
    img.style = value
    text.innerHTML = value
}