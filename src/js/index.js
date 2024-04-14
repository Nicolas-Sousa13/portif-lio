const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosIativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => { 
    mostrarMaisProjetos();
    esconderBotao();
})

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosIativos.forEach(projetoIativo => {
        projetoIativo.classList.add('ativo');
    });
}
