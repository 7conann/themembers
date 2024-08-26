// Função para obter os parâmetros da URL
function getURLParameters() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    // Extrair os parâmetros 'id' e 'name'
    const id = urlParams.get('id');
    const name = urlParams.get('name');

    return { id, name };
}

// Função para usar os parâmetros
function useParameters() {
    const { id, name } = getURLParameters();

    // Exibindo os parâmetros no console
    console.log('ID:', id);
    console.log('name:', name);

    // Exemplo: Definir valores em elementos da página
    document.getElementById('userId').textContent = id;
    document.getElementById('username').textContent = name;

    // Você pode usar esses valores para outras operações, como fazer chamadas API, etc.
}

// Chame a função ao carregar a página
document.addEventListener('DOMContentLoaded', useParameters);