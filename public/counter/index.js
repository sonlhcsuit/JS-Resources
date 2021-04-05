let incBtn = document.getElementById('inc')
let dcrBtn = document.getElementById('dcr')
let dspPrg = document.getElementById('dsp')


function update(amount) {
    let current_value = dspPrg.innerHTML
    current_value = parseInt(current_value)
    current_value = current_value + amount
    dspPrg.innerHTML = current_value
}
incBtn.addEventListener('click', () => update(1))
dcrBtn.addEventListener('click', () => update(-1))