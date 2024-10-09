import {pegarCSS}  from "./comum.js"

async function criaGraficoPizza(){
    const url = 'https://raw.githubusercontent.com/teotoniojr/2024-3DS-API-ex/refs/heads/main/indies_maisvendidos.json'
    const res = await fetch(url)
    const dados = await res.json()
    const jogosIndies = Object.keys(dados)
    const vendasIndies = Object.values(dados)

    const data = [
        {
            values: vendasIndies,
            labels: jogosIndies,
            type: 'pie',
            textinfo: 'label + percent'
        }
    ]
    const layout = {
        height: 400,
        width: 600,
        plot_bgcolor: pegarCSS('--cinza'),
        paper_bgcolor: pegarCSS('--laranja')
    }

    const indiesTitulo = document.createElement('h3')
    indiesTitulo.classList.add('caixa-grafico__titulo')
    indiesTitulo.innerHTML = ` Os <span>jogos indies</span> mais vendidos em 2023`

    const grafico = document.createElement('div')
    grafico.className = 'grafico-disco'
    document.getElementById('caixa-grafico').appendChild(indiesTitulo)
    document.getElementById('caixa-grafico').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
}

criaGraficoPizza()
