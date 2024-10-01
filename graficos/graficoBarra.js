
async function criarGraficoBarra(){
    const url = 'https://raw.githubusercontent.com/teotoniojr/2024-3DS-API-ex/refs/heads/main/jogos_mais_vendidos_gemini.json'
    const res = await fetch(url)
    const dados = await res.json()

    console.log(dados)
}

criarGraficoBarra()