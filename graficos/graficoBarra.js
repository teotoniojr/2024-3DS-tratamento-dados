import { pegarCSS, configuraEixo } from "./comum.js"

async function criarGraficoBarra(){
    const url = 'https://raw.githubusercontent.com/teotoniojr/2024-3DS-API-ex/refs/heads/main/jogo_vendas_gemini.json'
    const res = await fetch(url)
    const dados = await res.json()
    const jogos = Object.keys(dados)
    const vendas = Object.values(dados)

    const data = [
        {
            x: jogos,
            y: vendas,
            type: 'bar',
            marker: {
                color: pegarCSS('--cinza')
            }
        }
    ]
    const layout = {
        plot_bgcolor: pegarCSS('--branco'),
        paper_bgcolor: pegarCSS('--laranja'),
        title:{
            text: ' Os jogos mais vendidos no Mundo ',
            font: {
                color: pegarCSS('--branco'),
                family: pegarCSS('--fonte-titulo'),
                size: 50
            }
        },
        xaxis: {
            tickfont: configuraEixo,
            tickangle: 45
        },
        yaxis:{
            tickfont: configuraEixo
        }

    }
    
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('caixa-grafico').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)

}

criarGraficoBarra()