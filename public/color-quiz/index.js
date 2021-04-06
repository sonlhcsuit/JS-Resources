const boxes = document.querySelectorAll('.box')
const prog = document.getElementById('timer')
let timer = null
const quiz = {
    color: '',
    diff: ''
}

function time() {
    return setInterval(() => {
        if (prog.value == 0) {
            clearInterval(timer)
            alert('You Loserr!')
        } else {
            prog.value = parseFloat(prog.value) - 0.05

        }
    }, 50)
}

function createColorQuiz() {
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)
    let alpha = 0.7
    let color = `rgb(${red}, ${green}, ${blue})`
    let diff = `rgba(${red}, ${green}, ${blue}, ${alpha})`
    quiz.color = color
    quiz.diff = diff
}

function renderColor() {
    let idx = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    idx = idx.sort((a, b) => Math.random() - Math.random())
    idx.forEach((e, i) => {
        if (i == 0) {
            boxes[e].style.backgroundColor = quiz.diff
        } else {
            boxes[e].style.backgroundColor = quiz.color
        }
    })
}
createColorQuiz()
renderColor()
timer = time()


boxes.forEach(box => {
    box.addEventListener('click', (e) => {
        if (e.target.style.backgroundColor == quiz.diff) {
            createColorQuiz()
            renderColor()

            clearInterval(timer)
            prog.value = 7
            timer = time()
        } else{
            clearInterval(timer)
            alert('You Loserr!')
        }

    })
})