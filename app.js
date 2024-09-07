// Obtém o estado com o valor da lista de estados
let estadoSelecionado = document.getElementById("estado-selecionado").value;
// Checa se o valor da lista de estados está vazio ou não
if (!estadoSelecionado) {
    section.innerHTML = "<h3>Nenhum estado selecionado.</h3><h3>Por favor, escolha um dos estados da lista</h3>";
    return;
}

//Precisa validar se o campo está vazio ou não quando aperta 'enter'

// Obtém o elemento de entrada da caixa de pesquisa
let campoPesquisa = document.getElementById("campo-pesquisa");

// Adiciona um evento de escuta para o evento 'keyup'
campoPesquisa.addEventListener('keyup', function(event) {
    // Verifica se a tecla pressionada foi 'Enter'
    if (event.key === 'Enter') {
        pesquisar();
    }
});

//Precisa implementar o código pra exibir resultados de acordo com o estado selecionado

function pesquisar(estadoSelecionado) {
    // Obtém a seção com o valor do campo da pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    // Converte todo o texto digitado para letras minúsculas
    campoPesquisa = campoPesquisa.toLowerCase();
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    // Checa se o valor do campo da pesquisa está vazio ou não
    if (!campoPesquisa) {
        section.innerHTML = "<h3>Nenhum valor passado.</h3><h3>Digite um tipo de resíduo a ser descartado</h3>";
        return;
    }
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    // Inicializa duas strings vazias para armazenar os titulos e descriçoes dos objetos no for
    let tipoResiduo = "";
    // Itera sobre cada dado na lista de dados
    for (let dado of dadosBahia) {
        // Converte todo o texto das variáveis para letras minúsculas
        tipoResiduo = dado.tipoResiduo.toLowerCase();
        // Compara se o campo da busca está contido nos títulos da base de dados
        if (tipoResiduo.includes(campoPesquisa)) {
            // Cria uma div para cada resultado, formatando o título, descrição e link
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

    if (!resultados) {
        section.innerHTML = "<h3>Nenhum resultado encontrado</h3>";
        return;
    }

    // Atribui os resultados formatados ao conteúdo da seção
    section.innerHTML = resultados;
}