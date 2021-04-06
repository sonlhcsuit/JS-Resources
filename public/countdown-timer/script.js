function generateStaticClock() {
    let units = [{
        unit: 'D',
        unit_plural: 'Days'
    }, {
        unit: 'H',
        unit_plural: 'Hours'
    }, {
        unit: 'M',
        unit_plural: 'Minutes'
    }, {
        unit: 'S',
        unit_plural: 'Seconds'
    },
    ]
    for (let unit of units) {
        document.getElementById("output-area").insertAdjacentHTML("beforeend", generateClockComponent(unit))
    }
}
function generateClockComponent({ unit, unit_plural }) {
    return `
    <div class="col-md-3 p-md-0">
            <div class="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                <div id="number">
                    <h1 id="${unit_plural}">
                        ${unit}
                    </h1>
                </div>
                <div>
                    <hr>
                    <h6>${unit_plural}</h6>
                </div>
            </div>
    </div>
    `
}
function render(milisec) {
    let date = parseInt(milisec / 1000 / 60 / 60 / 24)
    let hours = parseInt(milisec / 1000 / 60 / 60 - date * 24)

    let minutes = parseInt(milisec / 1000 / 60 - date * 24 * 60 - hours * 60)

    let seconds = parseInt(milisec / 1000 - date * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60)
    let values = [date, hours, minutes, seconds]



    let units = ['Days', 'Hours', 'Minutes', 'Seconds']
    // if (arguments.length != 4) {
    //     throw new Error('Input quantity is wrong!')
    // } else {
    for (let i = 0; i < units.length; i++) {
        document.getElementById(units[i]).innerHTML = values[i]
    }
    // }
}
function init() {
    generateStaticClock()
    document.getElementById('inp').addEventListener("input", (event) => {
        function tiktok() {
            let selected_day = new Date(event.target.value)
            selected_day = new Date(selected_day.valueOf()
                + selected_day.getTimezoneOffset() * 60 * 1000
            )
            // console.log(selected_day.getDate(), selected_day.getHours())

            let now = new Date(Date.now())
            now = new Date(now.valueOf()
                + now.getTimezoneOffset() * 60 * 1000
            )
            // console.log(now.getDate(), now.getHours())

            let selected_day_as_mili = selected_day.valueOf()
            // console.log(selected_day_as_mili)
            let now_as_mili = now.valueOf()

            let minus = new Date(selected_day_as_mili - now_as_mili).valueOf() + now.getTimezoneOffset() * 60 * 1000
            // console.log(minus)
            render(minus)
        }
        clearInterval(event.target.interval)
        event.target.interval = setInterval(tiktok, 1000)

    })
    // let destination = document.getElementById('inp').v
}
init()