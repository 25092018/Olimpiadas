function pesquisar() {
    // Função para pesquisar dados e exibir os resultados em uma seção HTML.

    // Seleciona o elemento HTML com o ID "resultados-pesquisa" que servirá
    // como container para os resultados.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //se o campo pesquisa for uma String não vai mostrar nada
    if(!campoPesquisa){
        section.innerHTML = "<p>Nada foi encotrado, voce precisa digitar um nome para pesquisar</p>"

        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar o HTML dos resultados.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
   

    // Itera sobre cada item (dado) no array de dados.
    for (let dado of dados) { 


        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        // se o dado includes campoPesquisa então faz alguma coisa

        if (titulo.includes(campoPesquisa)|| descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
  
        // Constrói o HTML para cada resultado, incluindo:
        // - Um div com a classe "item-resultado" para cada item.
        // - Um título (h2) com um link para mais informações.
        // - Uma descrição (p) com a classe "descricao-meta".
        // - Um link para mais informações.
        resultados += `<div class="item-resultado">
                            <h2>
                                <a href="#" target="_blank">${dado.titulo}</a>
                            </h2>
                            <p class="descricao-meta">${dado.descricao}</p>
                            <a href=${dado.link} target="_blank">Mais informações</a>
                        </div>`;
        }
    }

    if (!resultados){

        resultados = "<p>Nada foi encotrado</p>"

    }

    // Atribui o HTML gerado para o elemento section, substituindo
    // o conteúdo anterior.
    section.innerHTML = resultados;
}
             
             
             