document.getElementById("innum").addEventListener("input", (event) => {
    let dollars = (new Number(event.target.value) * 100).toFixed(0)
    let units = { quarter: 25, dime: 10, nickel: 5, penny: 1 }
    let answ = {}
    for (let unit in units) {
        answ[unit] = parseInt(dollars / units[unit])
        dollars = dollars - answ[unit] * units[unit]
        // console.log(dollars)
    }
    document.getElementById('num').innerHTML = `${answ.quarter} quarter${answ.quarter <= 1 ? '' : 's'}, ${answ.nickel} nickel${answ.nickel <= 1 ? '' : 's'}, ${answ.dime} dime${answ.dime <= 1 ? '' : 's'}, ${answ.penny} penn${answ.penny<= 1 ? 'y' : 'ies'}, `
})