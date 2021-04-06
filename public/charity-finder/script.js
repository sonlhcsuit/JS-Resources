const apiKey = 'e03ee621-2bc3-46e1-bf40-bdfa1ac36620'
function generateCard({summary,title,image,projectLink,imageLink}) {
    
    return `
    <div class="card col-md-5 m-md-5">
        <img class="card-img-top" src="${image.imagelink[3].url}" alt="Card image cap">
        <div class="card-body h-25">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${summary}</p>
            <a href="${projectLink}" class="btn btn-primary">More Infomation</a>
        </div>
    </div>
    `
}

window.onload = () => {
    let url = `https://api.globalgiving.org/api/public/projectservice/featured/projects?api_key=${apiKey}`
    fetch(url, {
        method: 'GET',
        // mode: 'no-cors',
        headers: {
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    })
        .then(res => res.json())
        .then(res => {
            res.projects.project.forEach(val=>{
                console.log(val)
                document.getElementById('rows').insertAdjacentHTML('beforeend', generateCard(val))
            })
        })
}
