async function criaGraficoPizza(){
    const url = 'https://raw.githubusercontent.com/teotoniojr/2024-3DS-API-ex/refs/heads/main/indes_mais_vendidos_gogamers.json'
    const res = await fetch(url)
    const dados = await res.json()
}

criaGraficoPizza()
