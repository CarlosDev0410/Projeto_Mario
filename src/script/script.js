
/* 
OBJETIVO 1 - Quando clicar no botão de veja o trailer, devemos abrir a modal com o video do trailer

OBJETIVO 2 - Quando clicar no X o Video Fecha
*/

const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector('.modal');
const fecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkVideo = video.src;

function alternaClasse(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternaClasse();
    video.setAttribute("src", linkVideo);
});

fecharModal.addEventListener("click", () => {
    alternaClasse();
    video.setAttribute("src", "");
});


