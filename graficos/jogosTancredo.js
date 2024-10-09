import { pegarCSS } from "./comum.js"

async function graficosTancredo(){
    const url = 'https://raw.githubusercontent.com/teotoniojr/2024-3DS-API-ex/refs/heads/main/jogos-tancredo.json'
    const res = await fetch(url)
    const dados = await res.json()

    const jogosVotados = dados.slice(1).map( jogos => jogos[2] )

    const contagemJogos = jogosVotados.reduce((acc, jogosVotados) => {
        acc[jogosVotados] = (acc[jogosVotados] || 0) + 1
        return acc
    }, {})

    const valores = Object.values(contagemJogos)
    const etiqueta = Object.keys(contagemJogos)

    const data = [
        {
            values: valores,
            labels: etiqueta,
            type: 'pie',
            textinfo: 'label+percent'
        }
    ]
    const layout =
    {
        
        plot_bgcolor: pegarCSS('--cinza'),
        paper_bgcolor: pegarCSS('--laranja')
    }

    const pesquisaTitulo = document.createElement('h3')
    pesquisaTitulo.classList.add('caixa-grafico__titulo')
    pesquisaTitulo.innerHTML = `Os jogos mais votados no Colégio <span>Tancredo</span>`

    const grafico = document.createElement('div')
    grafico.className = 'grafico-disco'
    document.getElementById('caixa-grafico').appendChild(pesquisaTitulo)
    document.getElementById('caixa-grafico').appendChild(grafico)
    const config = {
        responsive: true,
        displayModeBar: false
    }
    Plotly.newPlot(grafico, data, layout, config)

    const caixa = document.getElementById('caixa-grafico')
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('caixa-grafico__texto')
    paragrafo.innerHTML = 'Nota-se que o jogo mais votado no colégio <span>Tancredo</span> difere do mais votado no mundo. Enquanto os estudantes elegeram, com 20 votos, o <span>Resident Evil 4 Remake</span> como o jogo mais desejado, a pesquisa global indicou que <span>Hogwarts Legacy</span> foi o jogo mais desejado do ano de 2023. Na escola, o mesmo jogo ficou em terceiro lugar, também se destacando entre os mais votados.'
    caixa.appendChild(paragrafo)
}

graficosTancredo()