const boxes = document.querySelectorAll('.box')
boxes.forEach(box =>{
    box.addEventListener('click',(e)=>{
        console.log(e.target)
        e.target.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
    })
})