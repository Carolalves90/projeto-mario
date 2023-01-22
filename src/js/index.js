/*  1 - quando clicar no botao de ver trailer
abria modal com o video do trailer.
        passo 1 - pegar o elemento que representa o botao de veja o trailer;
        passo 2 - pegar elemento de fechar modal usando o js
        passo 3 - identicar quando o usario clicar no botao;
        passo 4 - elemento modal no js;
        passo 5 - abril a modal na tela.

    2 - quando o usuario clicar no X devemos fechar a modal;
        passo 1 - pegar elemento de fechar modal já declarada;
        passo 2 - identificar quando o usuario clicar no X;
        passo 3 - fechar modal
*/

const botaoTrailer = document.querySelector(".botao-trailer")
const botaoFecharModal = document.querySelector(".fechar-modal")
const video = document.getElementById("video")
const modal = document.querySelector(".modal")
const linkDoVideo = video.src

function alternarModal() {
    modal.classList.toggle("aberto")
}

botaoTrailer.addEventListener("click", () => {
    alternarModal() 
    video.setAttribute("src", linkDoVideo)
})

botaoFecharModal.addEventListener("click", () => {
    alternarModal()
    video.setAttribute("src", " ")
})
