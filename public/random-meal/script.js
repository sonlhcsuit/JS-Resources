function generateMeal({ strMealThumb, strMeal, strYoutube, strInstructions, strCategory }, materials) {
    let mat = `<ul>` + materials.map(({ name, measure }) => {
        return `<li>${name}: ${measure}</li>`
    }).join("") + `</ul>`
    return `<div class="media m-md-2 row" style="height:15%!important">
                <div class="card col-md-3 h-100" >
                    <img class="card-img-top" src="${strMealThumb}" alt="Card image cap" id="img">
                    <div class="card-body">
                      <h5 class="card-title">${strMeal}</h5>
                      <p class="card-text">${strCategory}</p>
                      <a href="${strYoutube}" class="btn btn-danger">Go Youtube</a>
                    </div>
                  </div>
                <div class="media-body m-md-2 h-100" style="overflow:auto!important">
                    <h5 class="mt-0" id="meal">${strMeal}</h5>
                        ${mat}
                    <p id="recipe">${strInstructions}</p>
                </div>
            </div>`
}
function getmeal(url) {
    return fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            console.log(data.meals[0])
            let materials = []
            for (let i = 1; i <= 20; i++) {
                if (data.meals[0][`strIngredient${i}`] != '') {
                    materials.push({
                        name: data.meals[0][`strIngredient${i}`],
                        measure: data.meals[0][`strMeasure${i}`]
                    })
                }
            }
            document.getElementById("ct").innerHTML = ''
            document.getElementById("ct").insertAdjacentHTML("beforeend", generateMeal(data.meals[0], materials))
        })
}
function oneMeal({ name, random }) {
    let url = ''
    if (name) {
        url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
        console.log(url)
        return getmeal(url)
            .then()

    }

    if (random) {
        url = `https://www.themealdb.com/api/json/v1/1/random.php`
        console.log(url)
        return getmeal(url)

    }

}
function init() {
    document.getElementById('rd').addEventListener("click", () => {
        oneMeal({ random: true })

    })
    document.getElementById('search').addEventListener("click", () => {
        if (document.getElementById("stext").value != '') {
            oneMeal({ name: document.getElementById("stext").value })
        }
    })
}
window.onload = init
