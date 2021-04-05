let startBtn = document.getElementById('start')
let stopBtn = document.getElementById('stop')
let timeNum = document.getElementById('time')
let dspPrg = document.getElementById('dsp')
let current_timer = null

function update(amount) {
    if (dspPrg.innerHTML == 0) {
        clearInterval(current_timer)
        alert('Done!')
        return
    }
    let current_value = dspPrg.innerHTML
    current_value = parseInt(current_value)
    current_value = current_value + amount
    dspPrg.innerHTML = current_value
}

function time() {
    dspPrg.innerHTML = timeNum.value
    return setInterval(function() {
        update(-1)
    }, 1000)
}
startBtn.addEventListener('click', () => {
    if (current_timer != null) {
        clearInterval(current_timer)
        current_timer = null
    }
    current_timer = time()

})
stopBtn.addEventListener('click', () => clearInterval(current_timer))