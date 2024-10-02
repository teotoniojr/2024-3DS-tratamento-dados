
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
            type: 'bar'
        }
    ]
    
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('caixa-grafico').appendChild(grafico)
    Plotly.newPlot(grafico, data)

}

criarGraficoBarra()