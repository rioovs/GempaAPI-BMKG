$('.btn-show').on('click', () => {
    showGempa()
    // $('.btn-show').attr('hidden', 'true')
})
function showGempa() {
    $.ajax({
        url: `https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json`,
        success: (res) => {
            // console.log([res.Infogempa.gempa])
            const showGempa = [res.Infogempa.gempa]
            let card = ''
            showGempa.forEach(g => {
                card += CardGempa(g)
            })

            $('.gempa-terkini').html(card)
        },
        error: (e) => console.error(e.responseText)
    })
}

function CardGempa(g) {
    return `
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="https://data.bmkg.go.id/DataMKG/TEWS/${g.Shakemap}"
                        class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${g.Wilayah} - ${g.Lintang} - ${g.Bujur}</h5>
                        <ul class="list-group">
                            <li class="list-group-item"><strong>Tanggal :</strong> ${g.Tanggal}</li>
                            <li class="list-group-item"><strong>Jam :</strong> ${g.Jam}</li>
                            <li class="list-group-item"><strong>Kedalaman :</strong> ${g.Kedalaman}</li>
                            <li class="list-group-item"><strong>Wilayah :</strong>${g.Wilayah} </li>
                            <li class="list-group-item"><strong>Potensi :</strong> ${g.Potensi}</li>
                            <li class="list-group-item"><strong>Dirasakan :</strong> ${g.Dirasakan}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
`
}