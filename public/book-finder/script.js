function render({volumeInfo,previewLink}){
    let {authors} = volumeInfo
    authors = authors || 'N/A'
    return `<div class="card col-md-3 m-md-0 h-md-0" >
                <img class="card-img-top" src="${volumeInfo.imageLinks.smallThumbnail}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${volumeInfo.title}</h5>
                    <p class="card-text">${authors == 'N/A'?authors:authors.join(', ')}</p>
                    <a href="${previewLink}" class="btn btn-primary">Detail</a>
                </div>
            </div>`
}
window.onload = ()=>{
    document.getElementById('search').addEventListener('click',()=>{
        document.getElementById('rows').innerHTML = ''
        let value = document.getElementById('stext').value
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            let html = data.items.map(render).join('')
document.getElementById('rows').insertAdjacentHTML('beforeend',html)

        })
    })
}