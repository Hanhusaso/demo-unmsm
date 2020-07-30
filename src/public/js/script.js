
// INICIO FETCH NOTICIAS

var cont_noticias = document.querySelector('#cont-noticias')

if (cont_noticias) {
    function get_news() {
        fetch('https://node-noticias-2020.herokuapp.com/inventario/api/v1/noticia')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                createCardsNews(data)
            })
    }
    function createCardsNews(data) {
        console.log(data.noticias)
        cont_noticias.innerHTML = ''
        for (let valor of data.noticias) {
            // console.log(valor)
            cont_noticias.innerHTML += `
                <div class="card">
                    <img class="card-img-top" src="${ valor.imagen }" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${ valor.titulo }</h5>
                        <p class="card-text">${ valor.descripcion }</p>
                    </div>
                </div>
            `
        }
    }
    get_news()
}

// FIN FETCH NOTICIAS