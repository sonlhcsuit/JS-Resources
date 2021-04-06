function CSV2JSON(csv) {
    csv = csv.replaceAll("\"", "")
    let record = csv.split("\n")
    let cols = record[0].split(",")
    record.shift()
    let json = []
    for (let i = 0; i < record.length; i++) {
        let obj = {}
        data = record[i].split(",")
        for (let j = 0; j < cols.length; j++) {
            obj[cols[j]] = data[j]
        }
        json.push(obj)
    }
    return json
}
function JSON2CSV(json) {
    // console.log(json)
    let obj = JSON.parse(json)
    // console.log(obj)
    if (!Array.isArray(obj)) {
        throw new Error("JSON format can not be parsed!")
    }
    let cols = []
    for (let row of obj) {
        cols = [...cols, ...Object.keys(row)]
    }
    cols = new Array(...new Set(cols))
    let answ = cols.join(",") + '\n'
    for (let row of obj) {
        let temp = ""
        for (let col of cols) {
            temp = temp + (row[col] == undefined ? '_' : row[col]) + ','
        }
        temp = temp.split("")
        temp[temp.length - 1] = ''
        temp = temp.join("")
        temp = temp + '\n'
        answ = answ + temp
    }
    console.log(answ)
    return answ
}
function renderfile(file) {
    return new Promise((resolve, reject) => {
        let reader = new FileReader()
        reader.onload = () => {
            resolve(reader.result)
        }
        reader.readAsText(file)
    })

}
function init() {
    document.getElementById("btn-upload").addEventListener("click", () => {
        let f = document.createElement('input')
        f.setAttribute("type", "file")
        f.setAttribute("accept", '.csv,.json')
        f.click()
        f.onchange = () => {
            renderfile(f.files[0])
                .then(data => {
                    document.getElementById("inp").value = data
                    console.log(data)
                })
        }
    })
    document.getElementById("toJSON").addEventListener("click", () => {
        let json_ = CSV2JSON(document.getElementById("inp").value)
        console.log(json_)
        document.getElementById("out").value = JSON.stringify(json_)
    })
    document.getElementById("toCSV").addEventListener("click", () => {
        let csv_ = CSV2JSON(document.getElementById("inp").value)
        console.log(csv_)
    })
    document.getElementById("btn-download").addEventListener("click", () => {
        let data = document.getElementById("out").value
        let url = window.URL.createObjectURL(new Blob([data]))
        let a = document.createElement('a')
        a.href = url
        a.download = `csv2json.txt`
        a.click()
    })
    document.getElementById("btn-clear").addEventListener("click", () => {
        document.getElementById("out").value = ""
    })
    document.getElementById("btn-copy").addEventListener("click", () => {
        document.getElementById("out").disabled = false
        document.getElementById("out").select()
        // ba.select()
        document.execCommand("copy")
        console.log("ya")
        document.getElementById("out").disabled = true
    })

}
init()