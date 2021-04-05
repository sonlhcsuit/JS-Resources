let input = document.getElementById("innum")
let output = document.getElementById("num")

function convert(input) {
    if (/^[01]*$/gi.test(input)) {
        return parseInt(input, 2)
    }
    else throw new Error("Not only 0 and 1!")
}
input.addEventListener("input", () => {
    try {
        let data = convert(input.value)
        console.log(NaN)
        output.innerHTML = data || "Where magic happens"
        input.classList.add("is-valid")
        input.classList.remove("is-invalid")
    } catch (err) {
        if (err.message == "Not only 0 and 1!") {
            input.classList.remove("is-valid")
            input.classList.add("is-invalid")
        }
    }

})