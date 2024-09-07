// Obtém a lista de estados e guarda numa variável
let listaEstados = document.getElementById("lista-estados");
//cria uma variável para o estado selecionado
let estadoSelecionado = "";
// Adiciona um evento de escuta para a seleção de um estado na lista
listaEstados.addEventListener('change', function() {
    // Atualiza a variável estadoSelecionado e limpa o campo de resultados a cada alteração de estado
    estadoSelecionado = listaEstados.value;
    let section = document.getElementById("resultados-pesquisa");
    section.innerHTML = "";
});
// Obtém o elemento 'caixa de busca'
let campoPesquisa = document.getElementById("campo-pesquisa");
// Adiciona um evento de escuta para uma tecla apertada no campo de busca
campoPesquisa.addEventListener('keyup', function(event) {
    // Verifica se a tecla pressionada foi 'Enter'
    if (event.key === 'Enter') {
        // Aciona a função de pesquisa se o usuário apertar a tecla 'enter'
        pesquisar();
    } 
});
// Realiza a função de pesquisar na base de dados
function pesquisar() {
    // Obtém o valor do estado atual selecionado
    let estado = estadoSelecionado;
    // Checa se o valor da lista de estados está vazio ou não
    if (!estado) {
        let section = document.getElementById("resultados-pesquisa");
        section.innerHTML = "<h3>Nenhum estado selecionado.</h3><h3>Por favor, escolha um dos estados da lista</h3>";
        return;
    }
    // Obtém o valor do dado inserido no campo da pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    // Converte todo o texto digitado para letras minúsculas
    campoPesquisa = campoPesquisa.toLowerCase();
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    // Checa se o valor do campo da pesquisa está vazio ou não
    if (!campoPesquisa) {
        section.innerHTML = "<h3>Nenhum valor passado.</h3><h3>Por favor, digite um tipo de resíduo a ser descartado</h3>";
        return;
    }
    // Cria uma variável para receber a base de dados do estado
    let dadosEstado = "";
    // Atribui a lista (base de dados) a variável de acordo com o estado selecionado
    switch (estado) {
        case 'BA':
            dadosEstado = dadosBA;
            break;
        case 'PR':
            dadosEstado = dadosPR;
            break;
        case 'SC':
            dadosEstado = dadosSC;
            break;
    }
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    // Inicializa uma string vazia para comparar as tags com o termo de busca
    let tipoResiduo = "";
    // Itera sobre cada dado na lista de dados
    for (let dado of dadosEstado) {
        // Converte todo o texto das tags para letras minúsculas
        tipoResiduo = dado.tipoResiduo.toLowerCase();
        // Compara se o valor no campo da busca está contido nas tags da base de dados
        if (tipoResiduo.includes(campoPesquisa)) {
            // Cria uma div para cada resultado, formatando o título, endereço, horário e link
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank" rel="noopener noreferrer">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta"><strong>Endereço:</strong> ${dado.endereco}</p>
                    <p class="descricao-meta"><strong>Horário de atendimento:</strong> ${dado.horario}</p>
                    <a href=${dado.link} target="_blank">Mais informações</a>
                </div>
            `;
        }    
    }
    // Retorna uma mensagem informando que não foram encontrados resultados na base de dados
    if (!resultados) {
        section.innerHTML = "<h3>Nenhum resultado encontrado</h3>";
        return;
    }
    // Atribui os resultados formatados ao conteúdo da seção
    section.innerHTML = resultados;
}