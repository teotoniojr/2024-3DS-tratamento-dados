const url = 'https://raw.githubusercontent.com/teotoniojr/2024-3DS-API-ex/refs/heads/main/jogos_mais_vendidos_gemini.json'

async function vizualizarInformacoes() {
    const res = await fetch(url)
    const dados = await res.json()

    const jogoMaisVendido = dados[0].título
    const numeroDeVendas = dados[0].vendas
    const plataformas = dados[0].plataformas

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('caixa-grafico__texto')
    paragrafo.innerHTML = `Em busca de descobrir os jogos mais vendidos em 2023, foi feita uma série de pesquisas em diferentes fontes. Com o auxilio da inteligência artificial do google, foi possivel estimar que o jogo mais vendido foi ${jogoMaisVendido} com um total de vendas de aproximadamente ${numeroDeVendas} nas plataformas ${plataformas}`

    const caixa = document.getElementById('caixa-grafico')
    caixa.appendChild(paragrafo)
}

vizualizarInformacoes()