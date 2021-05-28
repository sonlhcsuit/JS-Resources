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
    <div class="col-md-3 p-md-0 box" id="${unit_plural}_arc">
        <p></p>
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
    let max_values = [30, 24, 60, 60]


    let units = ['Days', 'Hours', 'Minutes', 'Seconds']

    for (let i = 0; i < units.length; i++) {
        document.getElementById(units[i]).innerHTML = values[i]
        let cont = document.getElementById(`${units[i]}_arc`)
        cont.removeChild(cont.firstElementChild)
        cont.insertAdjacentHTML("afterbegin", percentComplete(values[i], max_values[i]))
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

    // let el = document.getElementById("Days_arc")
    // el.removeChild(el.firstElementChild)
    // el.insertAdjacentHTML("afterbegin", percentComplete(23, 24))

}
init()

function coordinateOnCircleFromZero(centreX, centreY, radius, angleInDegree) {
    // plus 180 because 0 rad are horizontal line, at bottom, 90  

    let offset = 180
    let angleInRadian = (angleInDegree + offset) * Math.PI / 180
    return {
        x: centreX + radius * Math.sin(angleInRadian),
        y: centreY + radius * Math.cos(angleInRadian)
    }
}


function path(radius, percent) {
    let start = coordinateOnCircleFromZero(100, 100, radius, 0)
    let end = coordinateOnCircleFromZero(100, 100, radius, -1 * percent * 360)

    return `
    <svg xmlns="http://www.w3.org/2000/svg">
        <path d="M ${start.x} ${start.y} A ${radius} ${radius} 0 ${percent>=0.5 ? 1:0} 1 ${end.x} ${end.y}" fill="none" stroke-width="5" stroke="green"/>
    </svg>
        `
}
function percentComplete(current_value, max_value) {

    return path(80, current_value / max_value)
}