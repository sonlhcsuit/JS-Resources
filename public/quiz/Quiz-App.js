
let quest = document.getElementById("question")
let areas = 'area'
let quizzes = [{
    question: '',
    choices: ['asd', 'sss', 'ccc', 'ppp'],
    answer: 'ppp'
}, {
    question: 'asda',
    choices: ['asd', 'sss', 'ccc', 'ppp'],
    answer: 'asd'
}]
let quiz = {}
function renderQuiz({ question, choices }) {
    quest.innerHTML = question
    let alphabet = ['A', 'B', 'C', 'D']

    alphabet.forEach((val, index) => {
        document.getElementById(`cont${val}`).innerHTML = choices[index]
    })

}
function selectChoice(choice) {
    let ans = quiz.answer
    if (document.getElementById(`cont${choice}`).innerHTML == ans) {
        alert("Correct")
        // throw new Error("RIGHHHHHHHHH")
    } else {
        // console.log("wr")
        alert("Wrong")
    }
    quiz = quizzes[0]
    quizzes.shift()
    if (quiz == undefined) {
        alert("You Finish!")
        renderQuiz({
            question: 'Accomplished!',
            choices: ['', '', '', ''],
            answer: ''
        })
    } else {
        renderQuiz(quiz)
    }
}
function init() {
    quiz = quizzes[0]
    quizzes.shift()
    function temp() {
        document.getElementById("question").style.setProperty('font-size','40px')
        renderQuiz(quiz)
        quest.removeEventListener("click", temp)
    }
    quest.addEventListener("click", temp)
    let alphabet = ['A', 'B', 'C', 'D']
    alphabet.forEach(val => {
        document.getElementById(`area${val}`).addEventListener('click', () => {
            selectChoice(`${val}`)
        })
    })
}
window.onload = ()=>{
    return fetch('https://opentdb.com/api.php?amount=10&type=multiple')
    .then(res=>res.json())
    .then(data=>{
        return data.results.map(val=>{
            return {
                question: val.question,
                choices: [val.correct_answer,...val.incorrect_answers],
                answer: val.correct_answer
            }

        })
    })
    .then(data=>{
        quizzes = data
        init()
    })
}