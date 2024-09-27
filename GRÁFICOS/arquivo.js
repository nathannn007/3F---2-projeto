const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizaDadosGlobais(){
    const res = await fetch(url);
    console.log(res);
    const dados = await res.json()
    console.log(dados);
    const paragrafo = document.createElement('p')
    //*cria uma tag 'p' que é um paragrafo(no HTML)*//
    paragrafo.classList.add('graficos-texto')
    //*cria uma classe 'graficos-texto' na tag 'p'
    const container = document.getElementById('graficos-container')
}

visualizaDadosGlobais();