
/* 
OBJETIVO 1 - Quando clicar no botão de veja o trailer, devemos abrir a modal com o video do trailer

OBJETIVO 2 - Quando clicar no X o Video Fecha
*/

const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector('.modal');
const fecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkVideo = video.src;


botaoTrailer.addEventListener("click", () => {
    modal.classList.toggle("aberto");
    video.setAttribute("src", linkVideo);
});

fecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});

